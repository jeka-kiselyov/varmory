import categories, { categorySortKeys } from '../showcase/categories/index.js';

const builtinDocs = import.meta.glob('../../../docs/*.md', { eager: true, query: '?raw', import: 'default' });
const readmeRaw = import.meta.glob('../../../README.md', { eager: true, query: '?raw', import: 'default' });

function nameToLabel(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
}

function normalizeItem(item) {
    const comp = item.component || item;
    const name = item.name || comp.name || 'Unknown';
    return {
        type: 'component',
        name,
        label: comp.label || nameToLabel(name),
        icon: comp.icon || null,
        order: comp.order ?? 999,
        code: comp.code ?? null,
        raw: item.raw || null,
        component: comp,
    };
}

function loadBuiltinDocs() {
    const docs = {};
    for (const content of Object.values(readmeRaw)) {
        docs['README'] = content;
    }
    for (const [path, content] of Object.entries(builtinDocs)) {
        docs[path.split('/').pop().replace('.md', '')] = content;
    }
    return docs;
}

/**
 * Merge built-in docs with extra docs.
 * Returns { [name]: content } with type-tagged entries available via docItems().
 */
function mergeDocs(extraDocs) {
    return { ...loadBuiltinDocs(), ...extraDocs };
}

/**
 * Convert a docs object into an array of typed items.
 */
function docItems(docs) {
    return Object.keys(docs).map(name => ({
        type: 'doc',
        name,
    }));
}

/**
 * Merge built-in categories with extra categories.
 * Returns { categories, sortKeys } with normalized, sorted items.
 */
function mergeCategories(components) {
    const sortKeys = { ...categorySortKeys };
    const merged = {};

    for (const [cat, items] of Object.entries(categories)) {
        merged[cat] = items.map(normalizeItem);
    }

    for (const [rawCat, items] of Object.entries(components || {})) {
        const cat = rawCat.replace(/^\d+\s*/, '');
        if (!sortKeys[cat]) sortKeys[cat] = rawCat;
        const arr = Array.isArray(items) ? items : [items];
        if (!merged[cat]) merged[cat] = [];
        for (const item of arr) {
            merged[cat].push(normalizeItem(item));
        }
        merged[cat].sort((a, b) => a.order - b.order);
    }

    const sorted = {};
    const keys = Object.keys(merged).sort((a, b) =>
        (sortKeys[a] || a).localeCompare(sortKeys[b] || b),
    );
    for (const k of keys) sorted[k] = merged[k];

    return sorted;
}

/**
 * Resolve initial tab and index from URL hash.
 */
function resolveHash(categories, docs) {
    const hash = window.location.hash.replace('#', '');
    const docNames = Object.keys(docs);
    let tab = docNames.includes('README') ? 'README' : Object.keys(categories)[0] || '';
    let index = 0;

    if (hash) {
        const [cat, name] = hash.split('/');
        if (cat === 'docs' && name && docs[name]) {
            tab = name;
        } else {
            tab = categories[cat] ? cat : tab;
            if (name && categories[tab]) {
                const idx = categories[tab].findIndex(i => i.name === name);
                if (idx >= 0) index = idx;
            }
        }
    }

    return { tab, index };
}

export {
    normalizeItem,
    loadBuiltinDocs,
    mergeDocs,
    mergeCategories,
    docItems,
    resolveHash,
};
