<template>
    <div class="colorSections">
        <div v-for="group in groups" :key="group.label" class="colorGroup">
            <div class="colorGroupLabel">{{ group.label }}</div>
            <div v-if="group.rows" class="colorRows non-selectable">
                <div v-for="(row, ri) in group.rows" :key="ri" class="colorRow">
                    <template v-for="c in row" :key="c.name">
                        <div v-if="c.separator" class="colorSeparator">⋯</div>
                        <div v-else class="colorSwatch" @click="onColorClick(c)">
                            <div class="colorBox" :class="c.bgClass" :style="c.var ? { background: c.var } : {}" />
                            <div class="colorInfo">
                                <span class="colorName text-truncate">{{ c.name }}</span>
                                <span class="colorVar text-truncate">{{ c.varName }}</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div v-else class="colorGrid non-selectable">
                <template v-for="c in group.colors" :key="c.name">
                    <div v-if="c.separator" class="colorSeparator">⋯</div>
                    <div v-else class="colorSwatch" @click="onColorClick(c)">
                        <div class="colorBox" :class="c.bgClass" :style="c.var ? { background: c.var } : {}" />
                        <div class="colorInfo">
                            <span class="colorName">{{ c.name }}</span>
                            <span class="colorVar">{{ c.varName }}</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
const quasarPaletteFamilies = [
    'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue',
    'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber',
    'orange', 'deep-orange', 'brown', 'grey', 'blue-grey',
];

function paletteGroup(name) {
    const q = (n) => ({ name: n, varName: `class="bg-${n}"`, bgClass: `bg-${n}` });
    return [
        q(name),
        q(`${name}-1`),
        { separator: true, name: `${name}-sep1` },
        q(`${name}-7`),
        { separator: true, name: `${name}-sep2` },
        q(`${name}-14`),
    ];
}

const colors = [
                {
                    label: 'BRAND',
                    colors: [
                        { name: 'primary', varName: '--q-primary', var: 'var(--q-primary)' },
                        { name: 'secondary', varName: '--q-secondary', var: 'var(--q-secondary)' },
                        { name: 'accent', varName: '--q-accent', var: 'var(--q-accent)' },
                        { name: 'dark', varName: '--q-dark', var: 'var(--q-dark)' },
                        { name: 'positive', varName: '--q-positive', var: 'var(--q-positive)' },
                        { name: 'negative', varName: '--q-negative', var: 'var(--q-negative)' },
                        { name: 'info', varName: '--q-info', var: 'var(--q-info)' },
                        { name: 'warning', varName: '--q-warning', var: 'var(--q-warning)' },
                    ],
                },
                {
                    label: 'BRAND MIXES',
                    colors: [
                        { name: 'color-mix(in srgb, var(--q-primary), transparent 50%)', varName: ' ', var: 'color-mix(in srgb, var(--q-primary), transparent 50%)' },
                        { name: 'color-mix(in srgb, var(--q-secondary), transparent 70%)', varName: ' ', var: 'color-mix(in srgb, var(--q-secondary), transparent 70%)' },
                        { name: 'color-mix(in srgb, var(--q-accent), black 70%)', varName: ' ', var: 'color-mix(in srgb, var(--q-accent), black 70%)' },
                    ],
                },
                {
                    label: 'TEXT',
                    colors: [
                        { name: 'text-bright', varName: '--q-text-bright', var: 'var(--q-text-bright)' },
                        { name: 'text', varName: '--q-text', var: 'var(--q-text)' },
                        { name: 'text-muted', varName: '--q-text-muted', var: 'var(--q-text-muted)' },
                        { name: 'text-faint', varName: '--q-text-faint', var: 'var(--q-text-faint)' },
                    ],
                },
                {
                    label: 'SURFACES',
                    colors: [
                        { name: 'surface-0', varName: '--q-surface-0', var: 'var(--q-surface-0)' },
                        { name: 'surface-1', varName: '--q-surface-1', var: 'var(--q-surface-1)' },
                        { name: 'surface-2', varName: '--q-surface-2', var: 'var(--q-surface-2)' },
                        { name: 'surface-3', varName: '--q-surface-3', var: 'var(--q-surface-3)' },
                        { name: 'surface-border', varName: '--q-surface-border', var: 'var(--q-surface-border)' },
                        { name: 'surface-overlay', varName: '--q-surface-overlay', var: 'var(--q-surface-overlay)' },
                        { name: 'body-bg', varName: '--q-body-bg', var: 'var(--q-body-bg)' },
                    ],
                },
                {
                    label: 'GLOWS & SHADOWS',
                    colors: [
                        { name: 'glow-primary', varName: '--q-glow-primary', var: 'var(--q-glow-primary)' },
                        { name: 'glow-accent', varName: '--q-glow-accent', var: 'var(--q-glow-accent)' },
                        { name: 'glow-warning', varName: '--q-glow-warning', var: 'var(--q-glow-warning)' },
                        { name: 'shadow-drop', varName: '--q-shadow-drop', var: 'var(--q-shadow-drop)' },
                        { name: 'shadow-inset', varName: '--q-shadow-inset', var: 'var(--q-shadow-inset)' },
                    ],
                },
                {
                    label: 'QUASAR PALETTE',
                    rows: quasarPaletteFamilies.map(f => paletteGroup(f)),
                },
            ];

const colorsAsCode = colors.map(group => {
    let colorLines = [];
    if (group.label == 'BRAND') {
        colorLines = group.colors.map(c => {
                const rand = Math.floor((Math.random() * 10000) % 3);
                if (rand == 0) {
                    return `  <div class="text-${c.name}">...</div>`;
                } else if (rand == 1) {
                    return `  <div class="bg-${c.name}">...</div>`;
                } else {
                    return `  <div style="color: var(--q-${c.name})">...</div>`;
                }
            }).join(',\n');
    } else if (group.label == 'TEXT') {
        return `${group.label}: 
<div class="text-bright">...</div> 
<div style="color: var(--q-text-bright)">...</div> 
<div class="text-muted">...</div>
<div style="color: var(--q-text-muted)">...</div>  
<div class="text-faint">...</div>
<div style="color: var(--q-text-faint)">...</div>\n  `;
    } else if (group.label == 'QUASAR PALETTE') {
        colorLines = group.rows.flat().filter(c => !c.separator).slice(0, 6).map(c =>
            `  <div class="bg-${c.name}">...</div>`
        ).join(',\n');
    } else {
        colorLines = (group.colors || []).map(c => {
                const rand = Math.floor((Math.random() * 10000) % 3);
                if (rand == 0) {
                    return `  <div style="background-color: var(--q-${c.name})">...</div>`;
                } else if (rand == 1) {
                    return `  <div style="color: var(--q-${c.name})">...</div>`;
                } else {
                    return `  <div style="color: var(--q-${c.name})">...</div>`;
                }
            }).join(',\n');
    }
    return `${group.label}:\n${colorLines}`;
}).join('\n\n');

export default {
    inject: ['showcaseCopy'],
    name: 'ShowcaseAllColors',
    label: 'All Colors',
    icon: 'palette',
    data() {
        return {
            groups: colors
        };
    },
    code: colorsAsCode,
    methods: {
        onColorClick(c) {
            this.showcaseCopy(c.name);
        },
    },
};
</script>

<style scoped>
.colorSections {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.colorGroupLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-text);
    padding-bottom: 6px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    margin-bottom: 6px;
}

.colorGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 8px;
}

.colorSwatch {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 8px;
    border-radius: 3px;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 5%, transparent);
    transition: border-color 0.15s ease;
}

.colorSwatch:hover {
    border-color: color-mix(in srgb, var(--q-text-bright) 12%, transparent);
}

.colorBox {
    width: 28px;
    height: 28px;
    border-radius: 3px;
    flex-shrink: 0;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 10%, transparent);
}

.colorInfo {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
}

.colorName {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    font-weight: 600;
    color: var(--q-text-bright);
    letter-spacing: 0.5px;
}

.colorRows {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.colorRow {
    display: flex;
    align-items: center;
    gap: 4px;
}

.colorRow .colorSwatch {
    flex: 1;
    min-width: 0;
}

.colorSeparator {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-faint);
    opacity: 0.4;
    padding: 0 2px;
    flex-shrink: 0;
}

.colorVar {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text);
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
