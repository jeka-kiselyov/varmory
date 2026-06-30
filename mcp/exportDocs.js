#!/usr/bin/env node
// ════════════════════════════════════════════════════════════════════════════
//  CLI wrapper around `exportShowcaseDocs`. Writes `dist/docs/` (docs,
//  components, definitions, plus an index README when one exists) under the
//  current working directory by default.
//
//  Usage:
//    node mcp/exportDocs.js [--root <dir>] [--out <dir>] [--no-clean]
//                           [--no-inline] [--no-quasar]
// ════════════════════════════════════════════════════════════════════════════

import path from 'path';
import { exportShowcaseDocs } from './showcaseMcp.js';

function parseArgs(argv) {
    const opts = {};
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === '--root') opts.rootDir = argv[++i];
        else if (a === '--out') opts.outDir = argv[++i];
        else if (a === '--no-clean') opts.clean = false;
        else if (a === '--no-inline') opts.inlineShowcaseExamples = false;
        else if (a === '--no-quasar') opts.quasar = false;
        else if (a === '-h' || a === '--help') opts.help = true;
        else throw new Error(`Unknown arg: ${a}`);
    }
    return opts;
}

const HELP = `
Export varmory docs, components, and API definitions to markdown.

Options:
  --root <dir>     Project root (default: cwd)
  --out  <dir>     Output dir (default: <root>/dist/docs)
  --no-clean       Do not remove the output dir before writing
  --no-inline      Skip inlining showcase templates into doc links
  --no-quasar      Skip Quasar's component JSONs

Example:
  node mcp/exportDocs.js
  node mcp/exportDocs.js --out docs-site
`.trim();

const opts = parseArgs(process.argv.slice(2));
if (opts.help) { console.log(HELP); process.exit(0); }

const rootDir = path.resolve(opts.rootDir || process.cwd());
const result = exportShowcaseDocs({ ...opts, rootDir });

const rel = path.relative(process.cwd(), result.outDir) || '.';
console.log(
    `Exported to ${rel}: ${result.docs} docs, ${result.components} components, ${result.definitions} definitions${result.cleaned ? ' (cleaned)' : ''}`,
);
