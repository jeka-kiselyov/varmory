<template>
    <div class="typoSections">
        <div class="typoSection">
            <div class="typoSectionLabel">HEADINGS</div>
            <div class="typoRows">
                <div v-for="h in headings" :key="h.cls" class="typoRow">
                    <div class="typoTags">
                        <span class="typoTag" @click="copy(h.cls)">{{ h.cls }}</span>
                        <span v-if="h.el" class="typoTag" @click="copy(h.el)">{{ h.el }}</span>
                    </div>
                    <div class="typoSample" :class="h.cls">{{ h.text }}</div>
                </div>
            </div>
        </div>

        <div class="typoSection">
            <div class="typoSectionLabel">FONT WEIGHTS</div>
            <div class="typoRows">
                <div v-for="w in weights" :key="w.cls" class="typoRow">
                    <div class="typoTags">
                        <span class="typoTag" @click="copy(w.cls)">{{ w.cls }}</span>
                    </div>
                    <div class="typoSample" :class="w.cls">{{ w.text }}</div>
                </div>
            </div>
        </div>

        <div class="typoSection">
            <div class="typoSectionLabel">CSS HELPER CLASSES</div>
            <div class="typoTable">
                <div class="typoTableHeader">
                    <span>Class Name</span>
                    <span>Description</span>
                </div>
                <div v-for="c in helpers" :key="c.cls" class="typoTableRow">
                    <div class="typoTags">
                        <span class="typoTag" @click="copy(c.cls)">{{ c.cls }}</span>
                    </div>
                    <div class="typoDesc">
                        <template v-if="c.css">
                            {{ c.descBefore }}<span class="typoCssBadge">{{ c.css }}</span>{{ c.descAfter }}
                        </template>
                        <template v-else>{{ c.desc }}</template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const loremLong = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.';
const loremLong2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.';

export default {
    inject: ['showcaseCopy'],
    name: 'ShowcaseTypography',
    label: 'Typography',
    icon: 'text_fields',
    order: 0,
    code: `HEADINGS:
<div class="text-h1">Headline 1</div>
<h1>Headline 1</h1>
<div class="text-h2">Headline 2</div>
<h2>Headline 2</h2>
<div class="text-h6">Headline 6</div>
<h6>Headline 6</h6>
<div class="text-subtitle1">Subtitle 1</div>
<div class="text-subtitle2">Subtitle 2</div>
<div class="text-body1">Body 1</div>
<div class="text-body2">Body 2</div>
<div class="text-caption">Caption</div>
<div class="text-overline">Overline</div>

FONT WEIGHTS:
<div class="text-weight-thin">...</div>
<div class="text-weight-light">...</div>
<div class="text-weight-regular">...</div>
<div class="text-weight-medium">...</div>
<div class="text-weight-bold">...</div>
<div class="text-weight-bolder">...</div>

CSS HELPERS:
<div class="text-right">...</div>
<div class="text-center">...</div>
<div class="text-justify">...</div>
<div class="text-bold">...</div>
<div class="text-italic">...</div>
<div class="text-no-wrap">...</div>
<div class="text-strike">...</div>
<div class="text-uppercase">...</div>
<div class="text-lowercase">...</div>
<div class="text-capitalize">...</div>`,
    data() {
        return {
            headings: [
                { cls: 'text-h1', el: 'h1', text: 'Headline 1' },
                { cls: 'text-h2', el: 'h2', text: 'Headline 2' },
                { cls: 'text-h3', el: 'h3', text: 'Headline 3' },
                { cls: 'text-h4', el: 'h4', text: 'Headline 4' },
                { cls: 'text-h5', el: 'h5', text: 'Headline 5' },
                { cls: 'text-h6', el: 'h6', text: 'Headline 6' },
                { cls: 'text-subtitle1', el: null, text: 'Subtitle 1' },
                { cls: 'text-subtitle2', el: null, text: 'Subtitle 2' },
                { cls: 'text-body1', el: null, text: 'Body 1. ' + loremLong },
                { cls: 'text-body2', el: null, text: 'Body 2. ' + loremLong2 },
                { cls: 'text-caption', el: null, text: 'Caption text' },
                { cls: 'text-overline', el: null, text: 'Overline' },
            ],
            weights: [
                { cls: 'text-weight-thin', text: lorem },
                { cls: 'text-weight-light', text: lorem },
                { cls: 'text-weight-regular', text: lorem },
                { cls: 'text-weight-medium', text: lorem },
                { cls: 'text-weight-bold', text: lorem },
                { cls: 'text-weight-bolder', text: lorem },
            ],
            helpers: [
                { cls: 'text-right', desc: 'Align text to the right' },
                { cls: 'text-left', desc: 'Align text to the left' },
                { cls: 'text-center', desc: 'Align text to the center' },
                { cls: 'text-justify', desc: 'Text will be justified' },
                { cls: 'text-bold', desc: 'Text will be in bold' },
                { cls: 'text-italic', desc: 'Text will be in italic' },
                { cls: 'text-no-wrap', desc: 'Non wrappable text', descBefore: 'Non wrappable text (applies ', css: 'white-space: nowrap', descAfter: ')' },
                { cls: 'text-strike', desc: 'Applies text-decoration: line-through', descBefore: 'Applies ', css: 'text-decoration: line-through', descAfter: '' },
                { cls: 'text-uppercase', desc: 'Transform text to uppercase' },
                { cls: 'text-lowercase', desc: 'Transform text to lowercase' },
                { cls: 'text-capitalize', desc: 'Capitalize first letter of the text' },
            ],
        };
    },
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
</script>

<style scoped>
.typoSections {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.typoSectionLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-text-faint);
    padding-bottom: 6px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    margin-bottom: 8px;
}

.typoRows {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.typoRow {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 8px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 3%, transparent);
}

.typoTags {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
    min-width: 140px;
    align-items: baseline;
}

.typoTag {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 0.5px;
    color: var(--q-accent);
    border: 1px solid color-mix(in srgb, var(--q-accent) 35%, transparent);
    padding: 2px 6px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
}

.typoTag:hover {
    background: color-mix(in srgb, var(--q-accent) 15%, transparent);
}

.typoSample {
    color: inherit;
    min-width: 0;
}

/* ── Helper classes table ── */
.typoTable {
    display: flex;
    flex-direction: column;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 8%, transparent);
    border-radius: 3px;
    overflow: hidden;
}

.typoTableHeader {
    display: flex;
    gap: 16px;
    padding: 10px 14px;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    font-weight: 600;
    letter-spacing: 0.5px;
    color: inherit;
    background: color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 8%, transparent);
}

.typoTableHeader span:first-child {
    min-width: 140px;
    flex-shrink: 0;
}

.typoTableRow {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 14px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
}

.typoTableRow:last-child {
    border-bottom: none;
}

.typoDesc {
    font-family: var(--font-body);
    font-size: var(--q-text-size-small);
    color: var(--q-text-bright);
}

.typoCssBadge {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-accent);
    background: color-mix(in srgb, var(--q-accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--q-accent) 25%, transparent);
    padding: 1px 6px;
    border-radius: 2px;
    margin: 0 2px;
}
</style>
