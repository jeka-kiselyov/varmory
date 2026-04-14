const files = import.meta.glob('./*/*.vue', { eager: true });
const rawFiles = import.meta.glob('./*/*.vue', { eager: true, query: '?raw', import: 'default' });

const categories = {};
const categorySortKeys = {};

for (const path in files) {
    // path looks like: ./Buttons/ColorVariants.vue
    const parts = path.split('/');
    const rawFolder = parts[1];
    const category = rawFolder.replace(/^\d+\s*/, '');
    const name = parts[2].replace('.vue', '');
    const mod = files[path].default;

    if (!categories[category]) {
        categories[category] = [];
        categorySortKeys[category] = rawFolder;
    }

    categories[category].push({
        name,
        label: mod.label || name,
        icon: mod.icon || null,
        order: mod.order ?? 999,
        code: mod.code || null,
        raw: rawFiles[path] || null,
        component: mod,
    });
}

for (const cat in categories) {
    categories[cat].sort((a, b) => a.order - b.order);
}

export default categories;
export { categorySortKeys };
