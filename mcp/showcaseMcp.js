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
 * @returns {McpServer} The same server instance, now with resources and tools
 *        attached.
 */
export default function attachShowcase(server, options = {}) {
    const rootDir = options.rootDir || null;
    const quasar = options.quasar !== false;   // default true
    const maxDepth = options.maxDepth ?? 5;

    // Build one flat file list from (1) root-scan and (2) caller overrides,
    // then run both through the same loader. `options.files` wins on
    // same-named docs/definitions because it comes last.
    const allFiles = [
        ...(rootDir ? collectFilesFromRoot(rootDir, { quasar, maxDepth }) : []),
        ...(options.files || []),
    ];
    const { categories, docs, definitions } = loadFromFiles(allFiles);

    // Resolve `extends` / `mixins` in every definition. Pure no-op for
    // definitions that don't have those markers, so hand-written JSONs
    // (e.g. JPanel) are preserved byte-for-byte. When `quasar: false`, skip
    // the (heavy) walk of node_modules/quasar/src — definitions still pass
    // through normalize, just without Quasar's shared resolver pool.
    const normalizerData = quasar ? loadQuasarNormalizerData(rootDir) : { apiExtends: {}, mixinLookup: {} };
    for (const key of Object.keys(definitions)) {
        definitions[key] = normalizeQuasarApi(definitions[key], normalizerData);
    }

    // ── Resources ──────────────────────────────────────────────────────
    // Resources are URI-addressable listings; MCP clients typically enumerate
    // them to discover what's available.

    server.resource('docs-list', 'showcase://docs', async () => {
        const names = Object.keys(docs);
        const text = names.map(n => `- ${n}`).join('\n');
        return {
            contents: [{ uri: 'showcase://docs', text: `Available docs:\n${text}`, mimeType: 'text/plain' }],
        };
    });

    server.resource(
        'doc',
        new ResourceTemplate('showcase://docs/{name}', { list: undefined }),
        async (uri, { name }) => {
            const content = docs[name];
            if (!content) return { contents: [] };
            return {
                contents: [{ uri: uri.href, text: content, mimeType: 'text/markdown' }],
            };
        },
    );

    server.resource('components-list', 'showcase://components', async () => {
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
        return {
            contents: [{ uri: 'showcase://components', text: lines.join('\n'), mimeType: 'text/markdown' }],
        };
    });

    server.resource('definitions-list', 'showcase://definitions', async () => {
        const names = Object.keys(definitions);
        const text = names.map(n => `- ${n}`).join('\n');
        return {
            contents: [{ uri: 'showcase://definitions', text: `Available API definitions:\n${text}`, mimeType: 'text/plain' }],
        };
    });

    // ── Tools ──────────────────────────────────────────────────────────
    // Tools are functions the model can call. All of ours are read-only —
    // they only query the caches built above.

    const readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };

    // Search across the showcase category tree. Matches on the raw filename,
    // the display label, or any `importName` the Vue file declares.
    server.tool(
        'search_components',
        'Search showcase components by name or label',
        { query: z.string().describe('Search term to match against component names and labels') },
        readOnly,
        async ({ query }) => {
            const q = query.toLowerCase();
            const results = [];
            for (const [cat, items] of Object.entries(categories)) {
                for (const item of items) {
                    const impNames = Array.isArray(item.importName) ? item.importName : (item.importName ? [item.importName] : []);
                    if (item.name.toLowerCase().includes(q) || item.label.toLowerCase().includes(q) || impNames.some(n => n.toLowerCase().includes(q))) {
                        results.push({ category: cat, name: item.name, label: item.label });
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
        },
    );

    // Fetch a single showcase component's metadata + template snippet. Tries
    // a case-insensitive match against file name, label, and importName.
    server.tool(
        'get_component',
        'Get a showcase component\'s template code and metadata',
        { name: z.string().describe('Component name (e.g. "Btn", "BasicPanel")') },
        readOnly,
        async ({ name }) => {
            const q = name.toLowerCase();
            for (const [cat, items] of Object.entries(categories)) {
                const impMatch = (imp) => { const names = Array.isArray(imp) ? imp : (imp ? [imp] : []); return names.some(n => n.toLowerCase() === q); };
                const item = items.find(i => i.name.toLowerCase() === q || i.label.toLowerCase() === q || impMatch(i.importName));
                if (item) {
                    const lines = [`# ${item.label}`, `Category: ${cat}`];
                    const impNames = Array.isArray(item.importName) ? item.importName : (item.importName ? [item.importName] : []);
                    for (const n of impNames) lines.push(`Import: ${n} from '${item.importFrom || 'varmory'}'`);
                    if (item.template) lines.push('', '## Template', '```html', item.template, '```');
                    return { content: [{ type: 'text', text: lines.join('\n') }] };
                }
            }
            return { content: [{ type: 'text', text: `Component "${name}" not found.` }] };
        },
    );

    // Render a component's full API (props, slots, events, methods) as
    // markdown. Works on both hand-written and Quasar-src definitions — the
    // normalize step upstream makes them interchangeable here.
    server.tool(
        'get_api',
        'Get the API definition (props, slots, events) for a component',
        { name: z.string().describe('Component name (e.g. "QBtn", "JPanel")') },
        readOnly,
        async ({ name }) => {
            const def = definitions[name];
            if (!def) {
                return { content: [{ type: 'text', text: `No API definition found for "${name}". Available: ${Object.keys(definitions).join(', ')}` }] };
            }
            const lines = [`# ${name} API`, '', '## Props', formatProps(def)];

            if (def.slots && Object.keys(def.slots).length) {
                lines.push('', '## Slots');
                for (const [slot, info] of Object.entries(def.slots)) {
                    lines.push(`- **${slot}** — ${info.desc || ''}${formatMixinTag(info)}`);
                    // Scoped slot props — indented under the slot bullet.
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
                    // Event payload args — one bullet per param.
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
                    // Method params + return — indented under the method bullet.
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
            return { content: [{ type: 'text', text: lines.join('\n') }] };
        },
    );

    // Simple full-text search across docs. Returns the first matching line as
    // a short snippet so the model can decide whether to fetch the full doc.
    server.tool(
        'search_docs',
        'Search documentation pages by name or content',
        { query: z.string().describe('Search term to match against doc names and content') },
        readOnly,
        async ({ query }) => {
            const q = query.toLowerCase();
            const results = [];
            for (const [name, content] of Object.entries(docs)) {
                if (name.toLowerCase().includes(q) || content.toLowerCase().includes(q)) {
                    const snippet = content.split('\n').find(l => l.toLowerCase().includes(q))?.trim() || '';
                    results.push({ name, snippet: snippet.slice(0, 120) });
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
        },
    );

    // Return the full raw markdown of a single doc.
    server.tool(
        'get_doc',
        'Read a documentation page by name',
        { name: z.string().describe('Doc page name (e.g. "README", "THEMING", "SHOWCASE")') },
        readOnly,
        async ({ name }) => {
            const content = docs[name];
            if (!content) {
                return { content: [{ type: 'text', text: `Doc "${name}" not found. Available: ${Object.keys(docs).join(', ')}` }] };
            }
            return { content: [{ type: 'text', text: content }] };
        },
    );

    return server;
}
