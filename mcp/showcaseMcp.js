import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';

/**
 * Extract the inner content of the root <template> block from a raw .vue string.
 */
function extractTemplate(raw) {
    if (!raw) return '';
    const openTag = raw.indexOf('<template');
    if (openTag === -1) return '';
    const contentStart = raw.indexOf('>', openTag) + 1;
    let depth = 1;
    let i = contentStart;
    while (i < raw.length && depth > 0) {
        const nextOpen = raw.indexOf('<template', i);
        const nextClose = raw.indexOf('</template>', i);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) {
            depth++;
            i = nextOpen + 9;
        } else {
            depth--;
            if (depth === 0) {
                const content = raw.slice(contentStart, nextClose);
                const lines = content.replace(/^\n|\n$/g, '').split('\n');
                const indent = Math.min(
                    ...lines.filter(l => l.trim()).map(l => l.match(/^(\s*)/)[1].length),
                );
                return lines.map(l => l.slice(indent)).join('\n').trim();
            }
            i = nextClose + 11;
        }
    }
    return '';
}

/**
 * Parse a .vue file into a showcase item.
 */
function parseVueFile(filePath) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const name = path.basename(filePath, '.vue');
    const template = extractTemplate(raw);

    const labelMatch = raw.match(/label:\s*['"](.+?)['"]/);
    const iconMatch = raw.match(/icon:\s*['"](.+?)['"]/);
    const importNameMatch = raw.match(/importName:\s*['"](.+?)['"]/);
    const importFromMatch = raw.match(/importFrom:\s*['"](.+?)['"]/);

    return {
        name,
        label: labelMatch?.[1] || name,
        icon: iconMatch?.[1] || null,
        importName: importNameMatch?.[1] || null,
        importFrom: importFromMatch?.[1] || null,
        template,
    };
}

/**
 * Scan showcase/categories/ directory and return structured data.
 */
function loadCategoriesFromDir(catDir) {
    if (!fs.existsSync(catDir)) return {};

    const categories = {};
    const folders = fs.readdirSync(catDir, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .sort((a, b) => a.name.localeCompare(b.name));

    for (const folder of folders) {
        const displayName = folder.name.replace(/^\d+\s*/, '');
        const files = fs.readdirSync(path.join(catDir, folder.name))
            .filter(f => f.endsWith('.vue'))
            .sort();

        categories[displayName] = files.map(file =>
            parseVueFile(path.join(catDir, folder.name, file)),
        );
    }
    return categories;
}

/**
 * Build categories from a flat list of file paths.
 * .vue files are grouped by their parent directory name (numeric prefixes stripped).
 * .md files are collected as docs.
 * .json files are collected as API definitions.
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
            const folder = path.basename(path.dirname(abs));
            const cat = folder.replace(/^\d+\s*/, '');
            if (!categories[cat]) categories[cat] = [];
            categories[cat].push(parseVueFile(abs));
        } else if (ext === '.md') {
            const name = path.basename(abs, '.md');
            const key = name === 'README' ? 'README' : name;
            docs[key] = fs.readFileSync(abs, 'utf-8');
        } else if (ext === '.json') {
            const name = path.basename(abs, '.json');
            definitions[name] = JSON.parse(fs.readFileSync(abs, 'utf-8'));
        }
    }

    return { categories, docs, definitions };
}

/**
 * Load README.md and docs/*.md from a root directory.
 */
function loadDocsFromDir(rootDir) {
    const docs = {};
    const readme = path.join(rootDir, 'README.md');
    if (fs.existsSync(readme)) {
        docs['README'] = fs.readFileSync(readme, 'utf-8');
    }
    const docsDir = path.join(rootDir, 'docs');
    if (fs.existsSync(docsDir)) {
        for (const file of fs.readdirSync(docsDir).filter(f => f.endsWith('.md'))) {
            docs[file.replace('.md', '')] = fs.readFileSync(path.join(docsDir, file), 'utf-8');
        }
    }
    return docs;
}

/**
 * Load API definition JSON files from a root directory.
 */
function loadDefinitionsFromDir(rootDir) {
    const defs = {};
    const defsDir = path.join(rootDir, 'src/varmory/showcase/definitions');
    if (!fs.existsSync(defsDir)) return defs;

    const folders = fs.readdirSync(defsDir, { withFileTypes: true })
        .filter(d => d.isDirectory());

    for (const folder of folders) {
        const files = fs.readdirSync(path.join(defsDir, folder.name))
            .filter(f => f.endsWith('.json'));
        for (const file of files) {
            const name = file.replace('.json', '');
            const content = fs.readFileSync(path.join(defsDir, folder.name, file), 'utf-8');
            defs[name] = JSON.parse(content);
        }
    }
    return defs;
}

/**
 * Format a component definition's props into a readable summary.
 */
function formatProps(apiDef) {
    if (!apiDef?.props) return 'No props defined.';
    const lines = [];
    for (const [name, prop] of Object.entries(apiDef.props)) {
        const def = prop.default !== undefined ? ` (default: ${prop.default})` : '';
        lines.push(`- **${name}**: ${prop.type || 'any'}${def} — ${prop.desc || ''}`);
    }
    return lines.join('\n');
}

/**
 * Attach showcase resources and tools to an MCP server instance.
 *
 * @param {McpServer} server - An @modelcontextprotocol/sdk McpServer instance
 * @param {object} [options]
 * @param {string} [options.rootDir] - Absolute path to the varmory root. Defaults to one level up from this file.
 * @param {string[]} [options.files] - Explicit list of file paths (.vue, .md, .json). When provided, files are auto-classified by extension. Can be combined with rootDir.
 * @returns {McpServer} The same server instance, with resources and tools attached
 */
export default function attachShowcase(server, options = {}) {
    const rootDir = options.rootDir || (options.files ? null : path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'));

    let categories = {};
    let docs = {};
    let definitions = {};

    if (rootDir) {
        const catDir = path.join(rootDir, 'src/varmory/showcase/categories');
        categories = loadCategoriesFromDir(catDir);
        docs = loadDocsFromDir(rootDir);
        definitions = loadDefinitionsFromDir(rootDir);
    }

    if (options.files) {
        const fromFiles = loadFromFiles(options.files);
        for (const [cat, items] of Object.entries(fromFiles.categories)) {
            if (!categories[cat]) categories[cat] = [];
            categories[cat].push(...items);
        }
        Object.assign(docs, fromFiles.docs);
        Object.assign(definitions, fromFiles.definitions);
    }

    // ── Resources ──────────────────────────────────────────

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
                const imp = item.importName ? ` (${item.importName})` : '';
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

    // ── Tools ──────────────────────────────────────────────

    const readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };

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
                    if (item.name.toLowerCase().includes(q) || item.label.toLowerCase().includes(q)) {
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

    server.tool(
        'get_component',
        'Get a showcase component\'s template code and metadata',
        { name: z.string().describe('Component name (e.g. "Btn", "BasicPanel")') },
        readOnly,
        async ({ name }) => {
            const q = name.toLowerCase();
            for (const [cat, items] of Object.entries(categories)) {
                const item = items.find(i => i.name.toLowerCase() === q || i.label.toLowerCase() === q);
                if (item) {
                    const lines = [`# ${item.label}`, `Category: ${cat}`];
                    if (item.importName) lines.push(`Import: ${item.importName} from '${item.importFrom || 'varmory'}'`);
                    if (item.template) lines.push('', '## Template', '```html', item.template, '```');
                    return { content: [{ type: 'text', text: lines.join('\n') }] };
                }
            }
            return { content: [{ type: 'text', text: `Component "${name}" not found.` }] };
        },
    );

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
            if (def.slots) {
                lines.push('', '## Slots');
                for (const [slot, info] of Object.entries(def.slots)) {
                    lines.push(`- **${slot}** — ${info.desc || ''}`);
                }
            }
            if (def.events) {
                lines.push('', '## Events');
                for (const [event, info] of Object.entries(def.events)) {
                    lines.push(`- **${event}** — ${info.desc || ''}`);
                }
            }
            return { content: [{ type: 'text', text: lines.join('\n') }] };
        },
    );

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
