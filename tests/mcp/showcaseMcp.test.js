import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import attachShowcase, { loadAll } from '../../mcp/showcaseMcp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixturesDir = path.join(__dirname, '..', 'fixtures');
const snapshotPath = path.join(fixturesDir, 'test-search.vecito');

// ── Mock MCP server that captures registered tools & resources ────────────

function createMockServer() {
    const tools = {};
    const resources = {};

    return {
        tools,
        resources,
        tool(name, description, schema, annotations, handler) {
            tools[name] = { description, schema, annotations, handler };
        },
        resource(name, uriOrDescriptor, handler) {
            resources[name] = { uri: uriOrDescriptor, handler };
        },
    };
}

/** Call a captured tool handler and parse the JSON text from the response. */
async function callTool(server, toolName, args) {
    const tool = server.tools[toolName];
    if (!tool) throw new Error(`Tool "${toolName}" not registered`);
    const result = await tool.handler(args);
    const text = result.content[0].text;
    const parsed = (() => { try { return JSON.parse(text); } catch { return text; } })();
    if (result.isError) return { isError: true, text: parsed };
    return parsed;
}

// ── loadAll ───────────────────────────────────────────────────────────────

describe('loadAll', () => {
    let data;

    beforeAll(() => {
        data = loadAll({ rootDir: fixturesDir, quasar: false });
    });

    it('loads categories from fixture .vue files', () => {
        expect(Object.keys(data.categories)).toContain('Widgets');
        expect(Object.keys(data.categories)).toContain('Inputs');
    });

    it('parses component metadata from .vue files', () => {
        const widgets = data.categories['Widgets'];
        const fancy = widgets.find(c => c.name === 'FancyBtn');
        expect(fancy).toBeDefined();
        expect(fancy.label).toBe('Fancy Button');
        expect(fancy.importName).toBe('FancyBtn');
        expect(fancy.importFrom).toBe('my-lib');
    });

    it('parses array importName', () => {
        const inputs = data.categories['Inputs'];
        const text = inputs.find(c => c.name === 'TextInput');
        expect(text.importName).toEqual(['TextInput', 'TInput']);
    });

    it('extracts template content', () => {
        const widgets = data.categories['Widgets'];
        const fancy = widgets.find(c => c.name === 'FancyBtn');
        expect(fancy.template).toContain('<button');
        expect(fancy.template).toContain('Click me');
        expect(fancy.template).not.toMatch(/^<template/);
    });

    it('loads markdown docs', () => {
        expect(data.docs['README']).toContain('Test Showcase');
        expect(data.docs['THEMING']).toContain('Dark Mode');
    });

    it('loads JSON definitions', () => {
        expect(data.definitions['FancyBtn']).toBeDefined();
        expect(data.definitions['FancyBtn'].props.color.type).toBe('String');
    });
});

// ── MCP tools (substring fallback — no vecito snapshot) ───────────────────

describe('MCP tools (no vecito)', () => {
    let server;

    beforeAll(() => {
        server = createMockServer();
        attachShowcase(server, { rootDir: fixturesDir, quasar: false, searchIndex: null });
    });

    it('registers all expected tools', () => {
        for (const name of ['search_components', 'get_component', 'get_api', 'search_docs', 'get_doc']) {
            expect(server.tools[name]).toBeDefined();
        }
    });

    it('registers all expected resources with descriptions', () => {
        for (const name of ['docs-list', 'components-list', 'definitions-list']) {
            const res = server.resources[name];
            expect(res).toBeDefined();
            expect(res.uri.description).toBeTruthy();
        }
        expect(server.resources['doc']).toBeDefined();
    });

    it('doc resource template lists all available docs', async () => {
        const template = server.resources['doc'].uri;
        expect(template.listCallback).toBeTypeOf('function');
        const result = await template.listCallback();
        const uris = result.resources.map(r => r.uri);
        expect(uris).toContain('showcase://docs/README');
        expect(uris).toContain('showcase://docs/THEMING');
        expect(result.resources.every(r => r.name)).toBe(true);
    });

    // ── search_components ─────────────────────────────────────────────

    describe('search_components', () => {
        it('finds component by name', async () => {
            const results = await callTool(server, 'search_components', { query: 'FancyBtn' });
            expect(results).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ name: 'FancyBtn', label: 'Fancy Button' }),
                ]),
            );
        });

        it('finds component by label (case-insensitive)', async () => {
            const results = await callTool(server, 'search_components', { query: 'fancy button' });
            expect(results).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ name: 'FancyBtn' }),
                ]),
            );
        });

        it('finds component by importName', async () => {
            const results = await callTool(server, 'search_components', { query: 'TInput' });
            expect(results).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ name: 'TextInput' }),
                ]),
            );
        });

        it('returns message for no matches', async () => {
            const result = await callTool(server, 'search_components', { query: 'nonexistent_xyz' });
            expect(result).toContain('No components matching');
        });
    });

    // ── get_component ─────────────────────────────────────────────────

    describe('get_component', () => {
        it('returns component markdown by name', async () => {
            const md = await callTool(server, 'get_component', { name: 'FancyBtn' });
            expect(md).toContain('# Fancy Button');
            expect(md).toContain('Category: Widgets');
            expect(md).toContain("Import: FancyBtn from 'my-lib'");
            expect(md).toContain('<button');
        });

        it('finds by label (case-insensitive)', async () => {
            const md = await callTool(server, 'get_component', { name: 'info panel' });
            expect(md).toContain('# Info Panel');
        });

        it('finds by importName', async () => {
            const md = await callTool(server, 'get_component', { name: 'TInput' });
            expect(md).toContain('# Text Input');
        });

        it('returns isError for unknown component', async () => {
            const result = await callTool(server, 'get_component', { name: 'NoSuchThing' });
            expect(result.isError).toBe(true);
            expect(result.text).toContain('not found');
        });
    });

    // ── get_api ───────────────────────────────────────────────────────

    describe('get_api', () => {
        it('returns formatted API markdown', async () => {
            const md = await callTool(server, 'get_api', { name: 'FancyBtn' });
            expect(md).toContain('# FancyBtn API');
            expect(md).toContain('## Props');
            expect(md).toContain('**color**');
            expect(md).toContain('Button color');
            expect(md).toContain('## Events');
            expect(md).toContain('**click**');
            expect(md).toContain('## Slots');
            expect(md).toContain('**default**');
        });

        it('returns isError for unknown definition', async () => {
            const result = await callTool(server, 'get_api', { name: 'UnknownComp' });
            expect(result.isError).toBe(true);
            expect(result.text).toContain('No API definition found');
        });
    });

    // ── search_docs ───────────────────────────────────────────────────

    describe('search_docs', () => {
        it('finds doc by name', async () => {
            const results = await callTool(server, 'search_docs', { query: 'THEMING' });
            expect(results).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ name: 'THEMING' }),
                ]),
            );
        });

        it('finds doc by content', async () => {
            const results = await callTool(server, 'search_docs', { query: 'dark mode' });
            expect(results).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ name: 'THEMING' }),
                ]),
            );
        });

        it('returns message for no matches', async () => {
            const result = await callTool(server, 'search_docs', { query: 'nonexistent_xyz' });
            expect(result).toContain('No docs matching');
        });
    });

    // ── get_doc ───────────────────────────────────────────────────────

    describe('get_doc', () => {
        it('returns full doc content', async () => {
            const md = await callTool(server, 'get_doc', { name: 'README' });
            expect(md).toContain('Test Showcase');
            expect(md).toContain('Getting Started');
        });

        it('returns isError for unknown doc', async () => {
            const result = await callTool(server, 'get_doc', { name: 'NOPE' });
            expect(result.isError).toBe(true);
            expect(result.text).toContain('not found');
        });
    });
});

// ── MCP tools with vecito snapshot ────────────────────────────────────────

describe('MCP tools (with vecito)', () => {
    let server;

    beforeAll(async () => {
        // Build a vecito snapshot from fixtures
        const { Vecito } = await import('vecito');
        const { categories, docs } = loadAll({ rootDir: fixturesDir, quasar: false });

        const v = new Vecito();
        const componentDocs = [];
        for (const [cat, items] of Object.entries(categories)) {
            for (const item of items) {
                const impNames = Array.isArray(item.importName) ? item.importName : (item.importName ? [item.importName] : []);
                componentDocs.push({ category: cat, name: item.name, label: item.label, importName: impNames, template: item.template });
            }
        }
        await v.addDocuments(componentDocs, {
            text: d => [d.category, d.name, d.label, ...d.importName, d.template || ''].join(' '),
            metadata: d => ({ type: 'component', category: d.category, name: d.name, label: d.label }),
        });
        const docEntries = Object.entries(docs).map(([name, content]) => ({ name, content }));
        await v.addDocuments(docEntries, {
            text: d => `${d.name}\n${d.content}`,
            metadata: d => ({ type: 'doc', name: d.name }),
        });

        await v.save(snapshotPath);

        server = createMockServer();
        attachShowcase(server, { rootDir: fixturesDir, quasar: false, searchIndex: snapshotPath });

        // Wait for vecito to finish loading inside attachShowcase
        await new Promise(r => setTimeout(r, 500));
    }, 60_000);

    it('search_components returns results via vecito', async () => {
        const results = await callTool(server, 'search_components', { query: 'button' });
        expect(Array.isArray(results)).toBe(true);
        expect(results.length).toBeGreaterThan(0);
        expect(results[0]).toHaveProperty('name');
        expect(results[0]).toHaveProperty('category');
    });

    it('search_docs returns results via vecito', async () => {
        const results = await callTool(server, 'search_docs', { query: 'dark mode colors' });
        expect(Array.isArray(results)).toBe(true);
        expect(results.length).toBeGreaterThan(0);
        expect(results[0]).toHaveProperty('name');
        expect(results[0]).toHaveProperty('snippet');
    });
});
