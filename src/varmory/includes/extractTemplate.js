// Extracts the inner content of the root <template> block from a raw .vue file string.
// Handles nested <template> tags and strips the common leading indentation.
// Used by the showcase to auto-generate code samples from component source.
export default function extractTemplate(raw) {
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
                    ...lines.filter(l => l.trim()).map(l => l.match(/^(\s*)/)[1].length)
                );
                return lines.map(l => l.slice(indent)).join('\n').trim();
            }
            i = nextClose + 11;
        }
    }
    return '';
}
