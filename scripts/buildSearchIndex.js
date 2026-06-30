#!/usr/bin/env node
// ════════════════════════════════════════════════════════════════════════════
//  Build a vecito search snapshot from the showcase categories and docs.
//  The resulting .vecito file is used by both the MCP server (Node) and the
//  browser sidebar (loaded via URL).
//
//  Usage:
//    node scripts/buildSearchIndex.js [--root <dir>] [--out <path>]
//                                     [--no-quasar] [--model <name>]
// ════════════════════════════════════════════════════════════════════════════

import path from 'path';
import fs from 'fs';
import { Vecito } from 'vecito';
import { loadAll } from '../mcp/showcaseMcp.js';

function parseArgs(argv) {
    const opts = {};
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === '--root') opts.rootDir = argv[++i];
        else if (a === '--out') opts.out = argv[++i];
        else if (a === '--no-quasar') opts.quasar = false;
        else if (a === '--model') opts.model = argv[++i];
        else if (a === '-h' || a === '--help') opts.help = true;
        else throw new Error(`Unknown arg: ${a}`);
    }
    return opts;
}

const HELP = `
Build a vecito search index from showcase components and docs.

Options:
  --root <dir>     Project root (default: cwd)
  --out  <path>    Output file (default: <root>/dist/search.vecito)
  --no-quasar      Skip Quasar's component JSONs
  --model <name>   Embedding model (default: Xenova/all-MiniLM-L6-v2)

Example:
  node scripts/buildSearchIndex.js
  node scripts/buildSearchIndex.js --out public/search.vecito
`.trim();

const opts = parseArgs(process.argv.slice(2));
if (opts.help) { console.log(HELP); process.exit(0); }

const rootDir = path.resolve(opts.rootDir || process.cwd());
const outPath = path.resolve(opts.out || path.join(rootDir, 'src/public/search.vecito'));

console.log(`Loading showcase data from ${rootDir}...`);
const { categories, docs } = loadAll({ rootDir, quasar: opts.quasar !== false });

const vecitoOpts = {};
if (opts.model) vecitoOpts.model = opts.model;
const v = new Vecito(vecitoOpts);

// Index components
const componentDocs = [];
for (const [cat, items] of Object.entries(categories)) {
    for (const item of items) {
        const impNames = Array.isArray(item.importName) ? item.importName : (item.importName ? [item.importName] : []);
        componentDocs.push({ category: cat, name: item.name, label: item.label, importName: impNames, template: item.template });
    }
}

if (componentDocs.length) {
    console.log(`Indexing ${componentDocs.length} components...`);
    await v.addDocuments(componentDocs, {
        text: d => [d.category, d.name, d.label, ...d.importName, d.template || ''].join(' '),
        metadata: d => ({ type: 'component', category: d.category, name: d.name, label: d.label }),
    });
}

// Index docs
const docEntries = Object.entries(docs).map(([name, content]) => ({ name, content }));
if (docEntries.length) {
    console.log(`Indexing ${docEntries.length} docs...`);
    await v.addDocuments(docEntries, {
        text: d => `${d.name}\n${d.content}`,
        metadata: d => ({ type: 'doc', name: d.name }),
    });
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
await v.save(outPath);

const rel = path.relative(process.cwd(), outPath) || outPath;
console.log(`Saved search index to ${rel} (${componentDocs.length} components, ${docEntries.length} docs)`);
