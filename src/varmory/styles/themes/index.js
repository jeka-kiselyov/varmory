const darkFiles = import.meta.glob('./*/dark.css', {  query: '?inline', import: 'default', });
const lightFiles = import.meta.glob('./*/light.css', {  query: '?inline', import: 'default', });
const commonFiles = import.meta.glob('./*/common.css', {  query: '?inline', import: 'default', });

const themes = {
};

for (const path in darkFiles) {
    const themeName = path.split('/')[1];
    themes[themeName] = themes[themeName] || {};
    themes[themeName].dark = darkFiles[path];
}

for (const path in lightFiles) {
    const themeName = path.split('/')[1];
    themes[themeName] = themes[themeName] || {};
    themes[themeName].light = lightFiles[path];
}

for (const path in commonFiles) {
    const themeName = path.split('/')[1];
    themes[themeName] = themes[themeName] || {};
    themes[themeName].common = commonFiles[path];
}

export default themes;