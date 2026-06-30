// ════════════════════════════════════════════════════════════════════════════
//  varmory MCP — exposes showcase metadata, docs, and component APIs to AI
//  agents over the Model Context Protocol.
//
//  HIGH-LEVEL FLOW
//  ───────────────
//  1. `attachShowcase(server, { rootDir, files })` is called once at boot.
//  2. We assemble a flat list of input file paths:
//       • when `rootDir` is given, scan the varmory layout and collect the
//         files we care about (README, docs/*.md, showcase categories,
//         hand-written definitions, and Quasar's component src JSONs)
//       • merge with any `files` the caller passed in explicitly
//  3. `loadFromFiles(paths)` routes each path by extension into three
//     in-memory caches:
//       • categories   — .vue files grouped by their parent folder
//       • docs         — .md files (README.md + docs/*.md)
//       • definitions  — .json files (component API definitions)
//  4. Every definition is piped through `normalizeQuasarApi` to resolve
//     `extends`, merge contributions from `mixins`, tag inherited entries, and
//     sort (required → own → inherited). Definitions without mixins/extends
//     pass through unchanged, so hand-written JSONs stay as-is.
//  5. MCP resources (listing endpoints) and tools (search / fetch endpoints)
//     are registered on the server, reading from the caches.
//
//  FILESYSTEM LAYOUT EXPECTED AT rootDir
//  ─────────────────────────────────────
//    README.md
//    docs/*.md
//    **/categories/<NN Name>/*.vue      (anywhere under rootDir, recursive
//                                        scan that skips node_modules / .git
//                                        / dist / build)
//    **/definitions/<Vendor>/*.json     (same — any folder named
//                                        `definitions` with vendor subfolders
//                                        of JSON files)
//    node_modules/quasar/src/…                          (optional; when
//                                                        present, Quasar
//                                                        components become
//                                                        queryable via
//                                                        get_api)
//
//  Merge order matters: caller-supplied `files` are appended AFTER root-scanned
//  files, so they override anything with the same definition/doc name.
// ════════════════════════════════════════════════════════════════════════════

import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import normalizeQuasarApi from '../src/varmory/includes/normalizeQuasarApi.js';

// ── Filesystem helpers ──────────────────────────────────────────────────────

/**
 * Recursively list all files beneath `dir` whose filename passes `predicate`.
 * Returns absolute paths. Safe if `dir` doesn't exist. `skip` is a set of
 * directory names to skip (e.g. `node_modules`).
 */
function walkFiles(dir, predicate, skip = new Set()) {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (skip.has(entry.name)) continue;
            out.push(...walkFiles(full, predicate, skip));
        } else if (entry.isFile() && predicate(entry.name)) out.push(full);
    }
    return out;
}

/**
 * Recursively locate all directories with a given name under `dir`, skipping
 * the entries in `skip` and giving up after `maxDepth` levels. Returns
 * absolute paths in sorted order.
 *
 * Depth 0 is `dir` itself. A `maxDepth` of 5 means we look at `dir` and 5
 * layers below it — deep enough for monorepo layouts but shallow enough to
 * not wander into surprise directories.
 */
function findDirsByName(dir, name, skip = new Set(), maxDepth = 5, depth = 0) {
    const out = [];
    if (!fs.existsSync(dir) || depth > maxDepth) return out;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        if (skip.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.name === name) out.push(full);
        out.push(...findDirsByName(full, name, skip, maxDepth, depth + 1));
    }
    return out.sort();
}

/**
 * Collect all files we care about from a varmory root directory, returned as a
 * flat array of absolute paths. The caller feeds this into `loadFromFiles`.
 *
 * Files are emitted in a deterministic order so the resulting categories
 * and definitions lists are stable across runs:
 *   README.md
 *   docs/*.md                                   (alphabetical)
 *   showcase/categories/<NN Name>/*.vue         (folders by name, files a→z)
 *   showcase/definitions/<Vendor>/*.json        (folders a→z, files a→z)
 *   node_modules/quasar/src/components (recursive) Q*.json  (Quasar's own API,
 *                                                            unless `quasar: false`)
 *
 * @param {string} rootDir
 * @param {object} [opts]
 * @param {boolean} [opts.quasar=true]  - When false, skip Quasar's component JSONs.
 * @param {number}  [opts.maxDepth=5]   - How deep to search for `categories/`
 *        and `definitions/` folders. Depth 0 is `rootDir` itself.
 */
function collectFilesFromRoot(rootDir, { quasar = true, maxDepth = 5 } = {}) {
    const files = [];

    // Skip these folder names when walking rootDir — they're expensive and
    // never contain user-authored showcase/definition folders.
    const skip = new Set(['node_modules', '.git', 'dist', 'build']);

    // README.md at the root
    const readme = path.join(rootDir, 'README.md');
    if (fs.existsSync(readme)) files.push(readme);

    // Markdown docs
    const docsDir = path.join(rootDir, 'docs');
    if (fs.existsSync(docsDir)) {
        const mdFiles = fs.readdirSync(docsDir).filter(n => n.endsWith('.md')).sort();
        for (const name of mdFiles) files.push(path.join(docsDir, name));
    }

    // Showcase categories: any folder named `categories` under rootDir (not in
    // node_modules etc.) contains `<NN Name>/*.vue` subfolders.
    for (const catDir of findDirsByName(rootDir, 'categories', skip, maxDepth)) {
        const folders = fs.readdirSync(catDir, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name)
            .sort();
        for (const folder of folders) {
            const sub = path.join(catDir, folder);
            const vueFiles = fs.readdirSync(sub).filter(n => n.endsWith('.vue')).sort();
            for (const name of vueFiles) files.push(path.join(sub, name));
        }
    }

    // Hand-written API definitions: any folder named `definitions` under
    // rootDir contains `<Vendor>/*.json` subfolders.
    for (const defDir of findDirsByName(rootDir, 'definitions', skip, maxDepth)) {
        const folders = fs.readdirSync(defDir, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name)
            .sort();
        for (const folder of folders) {
            const sub = path.join(defDir, folder);
            const jsonFiles = fs.readdirSync(sub).filter(n => n.endsWith('.json')).sort();
            for (const name of jsonFiles) files.push(path.join(sub, name));
        }
    }

    // Quasar's authoritative component JSONs (contain mixins + extends).
    // These are added AFTER hand-written defs so they override by key (QBtn,
    // QInput, etc.). Skipped when `quasar: false`.
    if (quasar) {
        const quasarComp = path.join(rootDir, 'node_modules/quasar/src/components');
        if (fs.existsSync(quasarComp)) {
            for (const f of walkFiles(quasarComp, n => /^Q[A-Z].*\.json$/.test(n))) {
                files.push(f);
            }
        }
    }

    return files;
}

// ── Vue file parsing ────────────────────────────────────────────────────────

/**
 * Extract the inner content of the root <template> block from a raw .vue
 * string. Handles nested <template> tags (used for slot templates) and strips
 * the common leading indentation so the returned snippet reads cleanly when
 * embedded in a markdown code fence.
 */
function extractTemplate(raw) {
    if (!raw) return '';
    const openTag = raw.indexOf('<template');
    if (openTag === -1) return '';
    const contentStart = raw.indexOf('>', openTag) + 1;

    // Track nesting depth so a `<template #foo>` inside the root doesn't
    // trick us into closing early on its matching `</template>`.
    let depth = 1;
    let i = contentStart;
    while (i < raw.length && depth > 0) {
        const nextOpen = raw.indexOf('<template', i);
        const nextClose = raw.indexOf('</template>', i);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) {
            depth++;
            i = nextOpen + 9;   // past "<template"
        } else {
            depth--;
            if (depth === 0) {
                const content = raw.slice(contentStart, nextClose);
                const lines = content.replace(/^\n|\n$/g, '').split('\n');
                // Dedent by the minimum leading whitespace among non-blank lines.
                const indent = Math.min(
                    ...lines.filter(l => l.trim()).map(l => l.match(/^(\s*)/)[1].length),
                );
                return lines.map(l => l.slice(indent)).join('\n').trim();
            }
            i = nextClose + 11;  // past "</template>"
        }
    }
    return '';
}

/**
 * Locate the body of the `export default { ... }` block and return everything
 * between its braces. Brace counter ignores braces inside strings, template
 * literals, and `// ... ` / block comments so it survives realistic Vue files.
 * Returns '' if no `export default` is found.
 */
function findExportDefaultBody(raw) {
    const m = raw.match(/export\s+default\s*\{/);
    if (!m) return '';
    const open = m.index + m[0].length - 1;   // index of the opening `{`
    let depth = 1;
    let i = open + 1;
    while (i < raw.length && depth > 0) {
        const ch = raw[i];
        // Skip string / template literal — match quote and skip past it.
        if (ch === "'" || ch === '"' || ch === '`') {
            const q = ch;
            i++;
            while (i < raw.length) {
                if (raw[i] === '\\') { i += 2; continue; }
                if (raw[i] === q) { i++; break; }
                i++;
            }
            continue;
        }
        // Skip line comment.
        if (ch === '/' && raw[i + 1] === '/') {
            while (i < raw.length && raw[i] !== '\n') i++;
            continue;
        }
        // Skip block comment.
        if (ch === '/' && raw[i + 1] === '*') {
            i += 2;
            while (i < raw.length - 1 && !(raw[i] === '*' && raw[i + 1] === '/')) i++;
            i += 2;
            continue;
        }
        if (ch === '{') depth++;
        else if (ch === '}') {
            depth--;
            if (depth === 0) return raw.slice(open + 1, i);
        }
        i++;
    }
    return '';
}

/**
 * Parse a single .vue showcase file into a flat metadata record. We don't run
 * a full JS parser — we just look for the top-level `export default` options
 * we care about (`label`, `icon`, `importName`, `importFrom`).
 *
 * Match constraint: the option must appear at the export default block's first
 * indent level. This avoids picking up string values nested deeper (e.g. a
 * `label: 'false'` inside a `data() { ... accentOptions: [{ label: 'false' }] }`
 * would otherwise match before the real top-level `label`).
 */
function parseVueFile(filePath) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const name = path.basename(filePath, '.vue');
    const template = extractTemplate(raw);

    const body = findExportDefaultBody(raw);

    // Detect the indent unit used by the body (tab or N spaces) by reading
    // the first non-blank indented line.
    const indentMatch = /^([\t ]+)\S/m.exec(body);
    const indent = indentMatch ? indentMatch[1] : '    ';
    // Anchor regexes to "newline + exactly this indent + key:" so deeper
    // nested keys don't match.
    const at = (key, valuePattern) =>
        new RegExp(`(?:^|\\n)${indent.replace(/ /g, ' ').replace(/\t/g, '\\t')}${key}\\s*:\\s*${valuePattern}`);

    const labelMatch = at('label', `(['"])(.+?)\\1`).exec(body);
    const iconMatch = at('icon', `(['"])(.+?)\\1`).exec(body);
    const importFromMatch = at('importFrom', `(['"])(.+?)\\1`).exec(body);

    // `importName` can be either a string or an array of strings:
    //   importName: 'QBtn'
    //   importName: ['QSlider', 'QRange']
    const importArrayMatch = at('importName', `\\[([^\\]]+)\\]`).exec(body);
    let importName = null;
    if (importArrayMatch) {
        importName = importArrayMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || null;
    } else {
        const importNameMatch = at('importName', `(['"])(.+?)\\1`).exec(body);
        importName = importNameMatch?.[2] || null;
    }

    return {
        name,
        label: labelMatch?.[2] || name,
        icon: iconMatch?.[2] || null,
        importName,
        importFrom: importFromMatch?.[2] || null,
        template,
    };
}

// ── Unified loader ──────────────────────────────────────────────────────────

/**
 * Route a flat list of file paths by extension into the three in-memory caches
 * used by MCP tools:
 *   .vue   → categories[<parent-folder-with-NN-stripped>].push(parsedItem)
 *   .md    → docs[<name>]          (README.md keeps its `README` key)
 *   .json  → definitions[<name>]   (by filename, without extension)
 *
 * Later paths overwrite earlier ones for docs/definitions by the same name,
 * so callers can override root-scanned entries via `options.files`.
 */
function loadFromFiles(filePaths) {
    const categories = {};
    const docs = {};
    const definitions = {};

    for (const filePath of filePaths) {
        const abs = path.resolve(filePath);
        if (!fs.existsSync(abs)) continue;
        const ext = path.extname(abs);

        if (ext === '.vue') {
            // Group by the .vue's parent directory name, stripping any
            // numeric prefix (e.g. "04 Buttons" → "Buttons") — that's the
            // category naming convention used across the showcase folder.
            const folder = path.basename(path.dirname(abs));
            const cat = folder.replace(/^\d+\s*/, '');
            if (!categories[cat]) categories[cat] = [];
            categories[cat].push(parseVueFile(abs));
        } else if (ext === '.md') {
            const name = path.basename(abs, '.md');
            docs[name] = fs.readFileSync(abs, 'utf-8');
        } else if (ext === '.json') {
            const name = path.basename(abs, '.json');
            try { definitions[name] = JSON.parse(fs.readFileSync(abs, 'utf-8')); }
            catch { /* ignore malformed json; don't poison the cache */ }
        }
    }

    return { categories, docs, definitions };
}

// ── Quasar normalizer data ─────────────────────────────────────────────────

/**
 * Load the two kinds of "resolver data" that `normalizeQuasarApi` needs to
 * flatten a raw Quasar src JSON:
 *
 *   apiExtends   — the shared prop/slot/event defs referenced by
 *                  `"extends": "<name>"` in component JSONs. Lives in
 *                  `quasar/src/api.extends.json`.
 *   mixinLookup  — every non-Q*.json file under quasar/src/ keyed by its
 *                  relative path minus the `.json` extension. Matches the
 *                  mixin reference format used in Quasar JSONs, e.g.
 *                  `"composables/private.use-size/use-size"` or
 *                  `"components/btn/use-btn"`.
 *
 * Returns empty lookups when Quasar isn't installed at rootDir — definitions
 * without mixins/extends still pass through normalize unchanged.
 */
function loadQuasarNormalizerData(rootDir) {
    const quasarSrc = rootDir ? path.join(rootDir, 'node_modules/quasar/src') : null;
    if (!quasarSrc || !fs.existsSync(quasarSrc)) {
        return { apiExtends: {}, mixinLookup: {} };
    }

    const readJson = (p) => {
        try { return JSON.parse(fs.readFileSync(p, 'utf-8')); }
        catch { return null; }
    };

    const apiExtends = readJson(path.join(quasarSrc, 'api.extends.json')) || {};

    const mixinLookup = {};
    for (const file of walkFiles(quasarSrc, n => n.endsWith('.json'))) {
        const base = path.basename(file);
        // Skip the extends source and any component JSON — we only want
        // auxiliary mixin/composable definitions here.
        if (base === 'api.extends.json' || /^Q[A-Z]/.test(base)) continue;
        const rel = path.relative(quasarSrc, file).replace(/\\/g, '/').replace(/\.json$/, '');
        const json = readJson(file);
        if (json) mixinLookup[rel] = json;
    }

    return { apiExtends, mixinLookup };
}

// ── Unified load pipeline ──────────────────────────────────────────────────

/**
 * Assemble and normalize the three in-memory caches from a varmory root dir
 * and/or an explicit file list. Shared by `attachShowcase` (long-running MCP
 * server) and `exportShowcaseDocs` (one-shot static export) so both see the
 * exact same view of the project.
 */
function loadAll({ rootDir = null, files = [], quasar = true, maxDepth = 5 } = {}) {
    const allFiles = [
        ...(rootDir ? collectFilesFromRoot(rootDir, { quasar, maxDepth }) : []),
        ...files,
    ];
    const { categories, docs, definitions } = loadFromFiles(allFiles);
    const normalizerData = quasar
        ? loadQuasarNormalizerData(rootDir)
        : { apiExtends: {}, mixinLookup: {} };
    for (const key of Object.keys(definitions)) {
        definitions[key] = normalizeQuasarApi(definitions[key], normalizerData);
    }
    return { categories, docs, definitions };
}

// ── Markdown formatters (used by the get_api tool) ─────────────────────────

function formatType(type) {
    if (!type) return 'any';
    return Array.isArray(type) ? type.join(' | ') : type;
}

/** Small trailing tag rendered next to inherited props/slots/events/methods. */
function formatMixinTag(entry) {
    return entry?._mixin ? ` _[inherited: ${entry._mixin}]_` : '';
}

/** Render a component's props as a markdown bullet list. */
function formatProps(apiDef) {
    if (!apiDef?.props) return 'No props defined.';
    const lines = [];
    for (const [name, prop] of Object.entries(apiDef.props)) {
        const required = prop.required ? ' **(required)**' : '';
        const def = prop.default !== undefined ? ` (default: ${prop.default})` : '';
        const values = Array.isArray(prop.values) && prop.values.length
            ? ` [values: ${prop.values.join(', ')}]`
            : '';
        lines.push(`- **${name}**${required}: ${formatType(prop.type)}${def}${values} — ${prop.desc || ''}${formatMixinTag(prop)}`);
    }
    return lines.join('\n');
}

/**
 * Render a single showcase component as markdown: heading, category, imports,
 * and the `<template>` snippet in a fenced html block. Used by both the
 * `get_component` MCP tool and the static exporter.
 */
function renderComponentMd(item, cat) {
    const lines = [`# ${item.label}`, `Category: ${cat}`];
    const impNames = Array.isArray(item.importName)
        ? item.importName
        : (item.importName ? [item.importName] : []);
    for (const n of impNames) lines.push(`Import: ${n} from '${item.importFrom || 'varmory'}'`);
    if (item.template) lines.push('', '## Template', '```html', item.template, '```');
    return lines.join('\n');
}

/**
 * Render a component's full API (props, slots, events, methods) as markdown.
 * Used by both the `get_api` MCP tool and the static exporter.
 */
function renderApiMd(name, def) {
    const lines = [`# ${name} API`, '', '## Props', formatProps(def)];

    if (def.slots && Object.keys(def.slots).length) {
        lines.push('', '## Slots');
        for (const [slot, info] of Object.entries(def.slots)) {
            lines.push(`- **${slot}** — ${info.desc || ''}${formatMixinTag(info)}`);
            if (info.scope && Object.keys(info.scope).length) {
                for (const [k, v] of Object.entries(info.scope)) {
                    lines.push(`  - \`props.${k}\`: ${formatType(v?.type)} — ${v?.desc || ''}`);
                }
            }
        }
    }

    if (def.events && Object.keys(def.events).length) {
        lines.push('', '## Events');
        for (const [event, info] of Object.entries(def.events)) {
            lines.push(`- **${event}** — ${info.desc || ''}${formatMixinTag(info)}`);
            if (info.params && Object.keys(info.params).length) {
                for (const [k, v] of Object.entries(info.params)) {
                    lines.push(`  - \`${k}\`: ${formatType(v?.type)} — ${v?.desc || ''}`);
                }
            }
        }
    }

    if (def.methods && Object.keys(def.methods).length) {
        lines.push('', '## Methods');
        for (const [method, info] of Object.entries(def.methods)) {
            lines.push(`- **${method}()** — ${info.desc || ''}${formatMixinTag(info)}`);
            if (info.params && Object.keys(info.params).length) {
                for (const [k, v] of Object.entries(info.params)) {
                    const req = v?.required ? ' *(required)*' : '';
                    lines.push(`  - param \`${k}\`${req}: ${formatType(v?.type)} — ${v?.desc || ''}`);
                }
            }
            if (info.returns && typeof info.returns === 'object') {
                lines.push(`  - returns: ${formatType(info.returns.type)} — ${info.returns.desc || ''}`);
            }
        }
    }
    return lines.join('\n');
}

// ── Doc enrichment ─────────────────────────────────────────────────────────

/**
 * Scan markdown for showcase hash links (`[label](#Cat/Name)` or
 * `<a href="#Cat/Name">`) and inline each referenced item's `<template>` as
 * a fenced html block right after the containing block (paragraph, heading,
 * list, etc.) — never mid-line.
 *
 * Each `Cat/Name` is injected only on its first occurrence; later references
 * stay as bare links. Links inside fenced code blocks are ignored, and
 * unresolved refs are silently dropped. Returns the original content
 * unchanged when no refs resolve.
 */
function enrichDocWithShowcaseLinks(content, categories) {
    if (!content || !categories) return content;

    const catKey = (cat) => {
        if (categories[cat]) return cat;
        const lc = cat.toLowerCase();
        return Object.keys(categories).find(k => k.toLowerCase() === lc);
    };

    const resolve = (cat, name) => {
        const key = catKey(cat);
        if (!key) return null;
        const lc = name.toLowerCase();
        const item = categories[key].find(i =>
            i.name.toLowerCase() === lc || i.label.toLowerCase() === lc,
        );
        if (!item || !item.template) return null;
        return { cat: key, item };
    };

    const mdRe = /\[[^\]]+\]\(#([A-Za-z][A-Za-z0-9_-]*)\/([A-Za-z0-9_-]+)\)/g;
    const htmlRe = /href\s*=\s*["']#([A-Za-z][A-Za-z0-9_-]*)\/([A-Za-z0-9_-]+)["']/g;

    const out = [];
    const injected = new Set();
    let pending = [];
    let inFence = false;

    const flushPending = () => {
        if (!pending.length) return;
        // Ensure exactly one blank line sits between prior content and the
        // first injection, regardless of whether we just pushed a blank.
        if (out.length && out[out.length - 1].trim() !== '') out.push('');
        for (const { cat, item } of pending) {
            out.push(`<!-- showcase: ${cat}/${item.name} -->`);
            out.push('```html');
            out.push(item.template);
            out.push('```');
            out.push('');
        }
        pending = [];
    };

    for (const line of content.split('\n')) {
        const isFenceMarker = /^\s*```/.test(line);
        if (isFenceMarker) inFence = !inFence;

        out.push(line);

        if (!inFence && !isFenceMarker) {
            for (const re of [mdRe, htmlRe]) {
                re.lastIndex = 0;
                let m;
                while ((m = re.exec(line)) !== null) {
                    const key = `${m[1]}/${m[2]}`;
                    if (injected.has(key)) continue;
                    const res = resolve(m[1], m[2]);
                    if (!res) continue;
                    injected.add(key);
                    pending.push(res);
                }
            }
        }

        if (!inFence && line.trim() === '' && pending.length) flushPending();
    }

    // EOF flush — only kicks in when the doc has no trailing blank line.
    if (pending.length) flushPending();

    return out.join('\n');
}

// ── Public entry point ─────────────────────────────────────────────────────

/**
 * Attach showcase resources and tools to an MCP server instance.
 *
 * @param {McpServer} server - An @modelcontextprotocol/sdk McpServer instance
 * @param {object} [options]
 * @param {string} [options.rootDir] - Absolute path to a varmory root. When
 *        provided, the standard showcase layout is scanned automatically. When
 *        omitted, the filesystem is NOT scanned — only `options.files` are
 *        loaded.
 * @param {string[]} [options.files] - Additional file paths to include on top
 *        of whatever `rootDir` produced. Classified by extension — see
 *        `loadFromFiles`. Useful for injecting fixtures in tests or overriding
 *        a specific definition/doc.
 * @param {boolean} [options.quasar=true] - When `false`, Quasar's component
 *        JSONs and mixin/extends data are NOT auto-loaded from `node_modules`.
 *        Definitions provided via `files` still pass through the normalizer
 *        but won't have access to Quasar's shared `extends` / mixin pool.
 * @param {number}  [options.maxDepth=5] - How deep the `categories/` /
 *        `definitions/` folder search goes under `rootDir`.
 * @param {boolean} [options.inlineShowcaseExamples=true] - When true, docs
 *        served via `get_doc` / the `doc` resource are post-processed to
 *        append a `## Referenced showcase components` section with the
 *        `<template>` of every `#Category/Name` link they contain. Set false
 *        to serve raw markdown.
 * @param {string|null} [options.searchIndex] - Absolute path to a pre-built
 *        `.vecito` search index. When provided, `search_components` and
 *        `search_docs` use semantic search. When omitted, defaults to
 *        `<rootDir>/src/public/search.vecito` if it exists, otherwise
 *        falls back to substring matching.
 * @returns {McpServer} The same server instance, now with resources and tools
 *        attached.
 */
export { loadAll };

export default function attachShowcase(server, options = {}) {
    const rootDir = options.rootDir || null;
    const quasar = options.quasar !== false;   // default true
    const maxDepth = options.maxDepth ?? 5;
    const inlineShowcaseExamples = options.inlineShowcaseExamples !== false;

    const { categories, docs, definitions } = loadAll({
        rootDir,
        files: options.files || [],
        quasar,
        maxDepth,
    });

    const serveDoc = (content) =>
        inlineShowcaseExamples ? enrichDocWithShowcaseLinks(content, categories) : content;

    // ── Vecito semantic search (loaded lazily from pre-built snapshot) ──
    const vecitoReady = (() => {
        if ('searchIndex' in options && !options.searchIndex) return null;
        const snapshotPath = options.searchIndex
            || (rootDir ? path.join(rootDir, 'src/public/search.vecito') : null);
        if (!snapshotPath || !fs.existsSync(snapshotPath)) return null;
        return import('vecito').then(({ Vecito }) => Vecito.load(snapshotPath)).catch((err) => {
            console.error('[varmory] Failed to load vecito search index:', err.message);
            return null;
        });
    })();

    /** Wrap a tool handler with try/catch so failures return isError instead of crashing. */
    const safeTool = (name, fn) => async (args) => {
        try { return await fn(args); }
        catch (err) {
            console.error(`[varmory] ${name}:`, err);
            return { isError: true, content: [{ type: 'text', text: `Error in ${name}: ${err.message}` }] };
        }
    };

    // ── Resources ──────────────────────────────────────────────────────
    // Resources are URI-addressable listings; MCP clients typically enumerate
    // them to discover what's available.

    const docNames = Object.keys(docs);
    const defNames = Object.keys(definitions);

    server.resource(
        'docs-list',
        { uri: 'showcase://docs', name: 'Documentation index', description: 'Lists all available documentation pages', mimeType: 'text/plain' },
        async () => ({
            contents: [{ uri: 'showcase://docs', text: `Available docs:\n${docNames.map(n => `- ${n}`).join('\n')}`, mimeType: 'text/plain' }],
        }),
    );

    server.resource(
        'doc',
        new ResourceTemplate('showcase://docs/{name}', {
            list: async () => ({
                resources: docNames.map(n => ({ uri: `showcase://docs/${n}`, name: n })),
            }),
            description: 'Read a specific documentation page by name',
        }),
        async (uri, { name }) => {
            const content = docs[name];
            if (!content) {
                return { contents: [{ uri: uri.href, text: `Doc "${name}" not found. Available: ${docNames.join(', ')}`, mimeType: 'text/plain' }] };
            }
            return { contents: [{ uri: uri.href, text: serveDoc(content), mimeType: 'text/markdown' }] };
        },
    );

    server.resource(
        'components-list',
        { uri: 'showcase://components', name: 'Components index', description: 'Lists all showcase components grouped by category', mimeType: 'text/markdown' },
        async () => {
            const lines = [];
            for (const [cat, items] of Object.entries(categories)) {
                lines.push(`## ${cat}`);
                for (const item of items) {
                    const impNames = Array.isArray(item.importName) ? item.importName.join(', ') : item.importName;
                    const imp = impNames ? ` (${impNames})` : '';
                    lines.push(`- ${item.label}${imp}`);
                }
                lines.push('');
            }
            return { contents: [{ uri: 'showcase://components', text: lines.join('\n'), mimeType: 'text/markdown' }] };
        },
    );

    server.resource(
        'definitions-list',
        { uri: 'showcase://definitions', name: 'API definitions index', description: 'Lists all available component API definitions', mimeType: 'text/plain' },
        async () => ({
            contents: [{ uri: 'showcase://definitions', text: `Available API definitions:\n${defNames.map(n => `- ${n}`).join('\n')}`, mimeType: 'text/plain' }],
        }),
    );

    // ── Tools ──────────────────────────────────────────────────────────
    // Tools are functions the model can call. All of ours are read-only —
    // they only query the caches built above.

    const readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };

    // Search across the showcase category tree. Matches on the raw filename,
    // the display label, or any `importName` the Vue file declares.
    server.tool(
        'search_components',
        'Search showcase components by name or label',
        { query: z.string().min(1).describe('Search term to match against component names and labels') },
        readOnly,
        safeTool('search_components', async ({ query }) => {
            const vecito = vecitoReady ? await vecitoReady : null;
            let results;
            if (vecito) {
                const hits = await vecito.search(query, { top: 15, filter: m => m.type === 'component' });
                results = hits.map(h => h.metadata);
            } else {
                const q = query.toLowerCase();
                results = [];
                for (const [cat, items] of Object.entries(categories)) {
                    for (const item of items) {
                        const impNames = Array.isArray(item.importName) ? item.importName : (item.importName ? [item.importName] : []);
                        if (item.name.toLowerCase().includes(q) || item.label.toLowerCase().includes(q) || impNames.some(n => n.toLowerCase().includes(q))) {
                            results.push({ category: cat, name: item.name, label: item.label });
                        }
                    }
                }
            }
            return {
                content: [{
                    type: 'text',
                    text: results.length
                        ? JSON.stringify(results, null, 2)
                        : `No components matching "${query}"`,
                }],
            };
        }),
    );

    // Fetch a single showcase component's metadata + template snippet. Tries
    // a case-insensitive match against file name, label, and importName.
    server.tool(
        'get_component',
        'Get a showcase component\'s template code and metadata',
        { name: z.string().min(1).describe('Component name (e.g. "Btn", "BasicPanel")') },
        readOnly,
        safeTool('get_component', async ({ name }) => {
            const q = name.toLowerCase();
            for (const [cat, items] of Object.entries(categories)) {
                const impMatch = (imp) => { const names = Array.isArray(imp) ? imp : (imp ? [imp] : []); return names.some(n => n.toLowerCase() === q); };
                const item = items.find(i => i.name.toLowerCase() === q || i.label.toLowerCase() === q || impMatch(i.importName));
                if (item) {
                    return { content: [{ type: 'text', text: renderComponentMd(item, cat) }] };
                }
            }
            return { isError: true, content: [{ type: 'text', text: `Component "${name}" not found.` }] };
        }),
    );

    // Render a component's full API (props, slots, events, methods) as
    // markdown. Works on both hand-written and Quasar-src definitions — the
    // normalize step upstream makes them interchangeable here.
    server.tool(
        'get_api',
        'Get the API definition (props, slots, events) for a component',
        { name: z.string().min(1).describe('Component name (e.g. "QBtn", "JPanel")') },
        readOnly,
        safeTool('get_api', async ({ name }) => {
            const def = definitions[name];
            if (!def) {
                return { isError: true, content: [{ type: 'text', text: `No API definition found for "${name}". Available: ${defNames.join(', ')}` }] };
            }
            return { content: [{ type: 'text', text: renderApiMd(name, def) }] };
        }),
    );

    // Simple full-text search across docs. Returns the first matching line as
    // a short snippet so the model can decide whether to fetch the full doc.
    server.tool(
        'search_docs',
        'Search documentation pages by name or content',
        { query: z.string().min(1).describe('Search term to match against doc names and content') },
        readOnly,
        safeTool('search_docs', async ({ query }) => {
            const vecito = vecitoReady ? await vecitoReady : null;
            let results;
            if (vecito) {
                const { Highlighter } = await import('vecito');
                const hits = await vecito.search(query, { top: 5, filter: m => m.type === 'doc', matchedTerms: true });
                results = hits.map(h => {
                    const content = docs[h.metadata.name] || '';
                    const snippet = h.matchedTerms
                        ? Highlighter.snippet(content, h.matchedTerms)
                        : content.slice(0, 120);
                    return { name: h.metadata.name, snippet: snippet.slice(0, 120) };
                });
            } else {
                const q = query.toLowerCase();
                results = [];
                for (const [name, content] of Object.entries(docs)) {
                    if (name.toLowerCase().includes(q) || content.toLowerCase().includes(q)) {
                        const snippet = content.split('\n').find(l => l.toLowerCase().includes(q))?.trim() || '';
                        results.push({ name, snippet: snippet.slice(0, 120) });
                    }
                }
            }
            return {
                content: [{
                    type: 'text',
                    text: results.length
                        ? JSON.stringify(results, null, 2)
                        : `No docs matching "${query}"`,
                }],
            };
        }),
    );

    // Return the full raw markdown of a single doc.
    server.tool(
        'get_doc',
        'Read a documentation page by name',
        { name: z.string().min(1).describe('Doc page name (e.g. "README", "THEMING", "SHOWCASE")') },
        readOnly,
        safeTool('get_doc', async ({ name }) => {
            const content = docs[name];
            if (!content) {
                return { isError: true, content: [{ type: 'text', text: `Doc "${name}" not found. Available: ${docNames.join(', ')}` }] };
            }
            return { content: [{ type: 'text', text: serveDoc(content) }] };
        }),
    );

    return server;
}

// ── Static export ──────────────────────────────────────────────────────────

/**
 * Export the docs, components, and API definitions as standalone markdown
 * files under `outDir`. Useful for publishing a browsable snapshot of the
 * showcase alongside (or instead of) the live MCP server.
 *
 * Output layout:
 *   <outDir>/README.md                   (only when a source README.md exists;
 *                                         the original content plus an
 *                                         appended index of everything below)
 *   <outDir>/docs/<name>.md              (each markdown doc, optionally
 *                                         enriched with showcase templates)
 *   <outDir>/components/<Cat>/<Name>.md  (each .vue showcase rendered)
 *   <outDir>/definitions/<Name>.md       (each API definition rendered)
 *
 * @param {object} options
 * @param {string}  options.rootDir                 - varmory project root (required).
 * @param {string}  [options.outDir]                - Target directory. Default: `<rootDir>/dist/docs`.
 * @param {boolean} [options.quasar=true]           - Include Quasar's component JSONs.
 * @param {number}  [options.maxDepth=5]            - Search depth for categories/definitions folders.
 * @param {boolean} [options.inlineShowcaseExamples=true] - Enrich docs with referenced showcase templates.
 * @param {boolean} [options.clean=true]            - Remove `outDir` before writing.
 *        Only permitted when `outDir` resolves inside `rootDir`; otherwise throws.
 * @returns {{ outDir: string, docs: number, components: number, definitions: number, cleaned: boolean }}
 */
export function exportShowcaseDocs(options = {}) {
    const {
        rootDir,
        quasar = true,
        maxDepth = 5,
        inlineShowcaseExamples = true,
        clean = true,
    } = options;
    if (!rootDir) throw new Error('exportShowcaseDocs: `rootDir` is required');

    const resolvedRoot = path.resolve(rootDir);
    const resolvedOut = path.resolve(options.outDir || path.join(resolvedRoot, 'dist/docs'));

    let cleaned = false;
    if (clean) {
        // Safety belt: refuse to clean a path that sits outside rootDir so a
        // misconfigured outDir can't wipe unintended directories.
        const rel = path.relative(resolvedRoot, resolvedOut);
        if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) {
            throw new Error(
                `exportShowcaseDocs: refusing to clean outDir (${resolvedOut}) — must be inside rootDir (${resolvedRoot}). Pass clean: false to skip.`,
            );
        }
        fs.rmSync(resolvedOut, { recursive: true, force: true });
        cleaned = true;
    }

    const { categories, docs, definitions } = loadAll({ rootDir: resolvedRoot, quasar, maxDepth });

    fs.mkdirSync(resolvedOut, { recursive: true });
    const docsOut = path.join(resolvedOut, 'docs');
    const componentsOut = path.join(resolvedOut, 'components');
    const definitionsOut = path.join(resolvedOut, 'definitions');

    // Docs. README is skipped here — it becomes the top-level index below.
    let docCount = 0;
    const docNames = Object.keys(docs).filter(n => n !== 'README').sort();
    if (docNames.length) fs.mkdirSync(docsOut, { recursive: true });
    for (const name of docNames) {
        const body = inlineShowcaseExamples
            ? enrichDocWithShowcaseLinks(docs[name], categories)
            : docs[name];
        fs.writeFileSync(path.join(docsOut, `${name}.md`), body);
        docCount++;
    }

    // Components.
    let componentCount = 0;
    const catNames = Object.keys(categories).sort();
    if (catNames.length) fs.mkdirSync(componentsOut, { recursive: true });
    for (const cat of catNames) {
        const catDir = path.join(componentsOut, cat);
        fs.mkdirSync(catDir, { recursive: true });
        for (const item of categories[cat]) {
            fs.writeFileSync(path.join(catDir, `${item.name}.md`), renderComponentMd(item, cat));
            componentCount++;
        }
    }

    // API definitions.
    let definitionCount = 0;
    const defNames = Object.keys(definitions).sort();
    if (defNames.length) fs.mkdirSync(definitionsOut, { recursive: true });
    for (const name of defNames) {
        fs.writeFileSync(path.join(definitionsOut, `${name}.md`), renderApiMd(name, definitions[name]));
        definitionCount++;
    }

    // Index README (only when source README exists).
    if (docs['README']) {
        const parts = [docs['README'].trimEnd(), '', '## Docs', ''];
        for (const name of docNames) parts.push(`- [${name}](docs/${name}.md)`);
        parts.push('', '## Components', '');
        for (const cat of catNames) {
            parts.push(`### ${cat}`, '');
            for (const item of categories[cat]) {
                parts.push(`- [${item.label}](components/${cat}/${item.name}.md)`);
            }
            parts.push('');
        }
        parts.push('## API definitions', '');
        for (const name of defNames) parts.push(`- [${name}](definitions/${name}.md)`);
        parts.push('');
        fs.writeFileSync(path.join(resolvedOut, 'README.md'), parts.join('\n'));
    }

    return {
        outDir: resolvedOut,
        docs: docCount,
        components: componentCount,
        definitions: definitionCount,
        cleaned,
    };
}
