<template>
    <div class="helperClasses">
        <div v-for="group in groups" :key="group.label" class="helperClasses_section">
            <div class="helperClasses_sectionLabel">{{ group.label }}</div>
            <div class="helperClasses_table">
                <div v-for="c in group.items" :key="c.cls" class="helperClasses_row">
                    <div class="helperClasses_tags">
                        <span class="helperClasses_tag" @click="copy(c.cls)">{{ c.cls }}</span>
                    </div>
                    <div class="helperClasses_desc">{{ c.desc }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowcaseHelperClasses',
    label: 'Helper Classes',
    icon: 'text_fields',
    inject: ['showcaseCopy'],
    code: `MOUSE:
<div class="non-selectable">...</div>
<div class="no-pointer-events">...</div>
<div class="all-pointer-events">...</div>
<div class="cursor-pointer">...</div>
<div class="cursor-not-allowed">...</div>
<div class="cursor-inherit">...</div>
<div class="cursor-none">...</div>

SCROLL:
<div class="scroll">...</div>
<div class="no-scroll">...</div>
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-hidden-y">...</div>
<div class="hide-scrollbar">...</div>

SIZE:
<div class="fit">...</div>
<div class="full-height">...</div>
<div class="full-width">...</div>
<div class="window-height">...</div>
<div class="window-width">...</div>
<div class="block">...</div>

ORIENTATION:
<div class="rotate-45">...</div>
<div class="rotate-90">...</div>
<div class="rotate-180">...</div>
<div class="rotate-270">...</div>
<div class="flip-horizontal">...</div>
<div class="flip-vertical">...</div>

POSITIONING:
<div class="fullscreen">...</div>
<div class="fixed-center">...</div>
<div class="fixed-top-right">...</div>
<div class="absolute-full">...</div>
<div class="absolute-center">...</div>
<div class="absolute-bottom-right">...</div>
<div class="relative-position">...</div>
<div class="z-top">...</div>
<div class="z-max">...</div>

BORDER:
<div class="no-border">...</div>
<div class="no-border-radius">...</div>
<div class="no-box-shadow">...</div>
<div class="no-outline">...</div>
<div class="rounded-borders">...</div>
<div class="border-radius-inherit">...</div>`,
    data() {
        return {
            groups: [
                {
                    label: 'MOUSE',
                    items: [
                        { cls: 'non-selectable', desc: 'User cannot select the DOM node or its text' },
                        { cls: 'no-pointer-events', desc: 'Element does not become a target of mouse events' },
                        { cls: 'all-pointer-events', desc: 'Restores pointer events (inverse of no-pointer-events)' },
                        { cls: 'cursor-pointer', desc: 'Changes cursor to pointer (clickable)' },
                        { cls: 'cursor-not-allowed', desc: 'Changes cursor to not-allowed' },
                        { cls: 'cursor-inherit', desc: 'Cursor inherits from parent element' },
                        { cls: 'cursor-none', desc: 'Hides the mouse cursor' },
                    ],
                },
                {
                    label: 'SCROLL',
                    items: [
                        { cls: 'scroll', desc: 'Applies CSS tweaks for optimal scroll on all platforms' },
                        { cls: 'no-scroll', desc: 'Hides scrollbars on the element' },
                        { cls: 'overflow-auto', desc: 'Sets overflow to auto' },
                        { cls: 'overflow-hidden', desc: 'Sets overflow to hidden' },
                        { cls: 'overflow-hidden-y', desc: 'Hides overflow on the vertical axis only' },
                        { cls: 'hide-scrollbar', desc: 'Removes the scrollbar while keeping scroll functional' },
                    ],
                },
                {
                    label: 'SIZE',
                    items: [
                        { cls: 'fit', desc: 'Width and height set to 100%' },
                        { cls: 'full-height', desc: 'Height set to 100%' },
                        { cls: 'full-width', desc: 'Width set to 100%, left and right margins 0' },
                        { cls: 'window-height', desc: 'Height set to 100vh, top and bottom margins 0' },
                        { cls: 'window-width', desc: 'Width set to 100vw, left and right margins 0' },
                        { cls: 'block', desc: 'Sets display to block' },
                    ],
                },
                {
                    label: 'ORIENTATION',
                    items: [
                        { cls: 'rotate-45', desc: 'Rotate element 45 degrees' },
                        { cls: 'rotate-90', desc: 'Rotate element 90 degrees' },
                        { cls: 'rotate-135', desc: 'Rotate element 135 degrees' },
                        { cls: 'rotate-180', desc: 'Rotate element 180 degrees' },
                        { cls: 'rotate-225', desc: 'Rotate element 225 degrees' },
                        { cls: 'rotate-270', desc: 'Rotate element 270 degrees' },
                        { cls: 'rotate-315', desc: 'Rotate element 315 degrees' },
                        { cls: 'flip-horizontal', desc: 'Flip element horizontally' },
                        { cls: 'flip-vertical', desc: 'Flip element vertically' },
                    ],
                },
                {
                    label: 'POSITIONING',
                    items: [
                        { cls: 'fullscreen', desc: 'Fix position covering the full window' },
                        { cls: 'fixed', desc: 'Sets position to fixed (without coordinates)' },
                        { cls: 'fixed-full', desc: 'Sets position to fixed covering the full window' },
                        { cls: 'fixed-center', desc: 'Sets position to fixed but centered in window' },
                        { cls: 'fixed-bottom', desc: 'Fixed position at bottom of window' },
                        { cls: 'fixed-left', desc: 'Fixed position at left of window' },
                        { cls: 'fixed-right', desc: 'Fixed position at right of window' },
                        { cls: 'fixed-top', desc: 'Fixed position at top of window' },
                        { cls: 'fixed-top-left', desc: 'Fixed position at top-left of window' },
                        { cls: 'fixed-top-right', desc: 'Fixed position at top-right of window' },
                        { cls: 'fixed-bottom-left', desc: 'Fixed position at bottom-left of window' },
                        { cls: 'fixed-bottom-right', desc: 'Fixed position at bottom-right of window' },
                        { cls: 'absolute', desc: 'Sets position to absolute (without coordinates)' },
                        { cls: 'absolute-full', desc: 'Sets position to absolute covering the full parent' },
                        { cls: 'absolute-center', desc: 'Sets position to absolute but centered in parent' },
                        { cls: 'absolute-bottom', desc: 'Absolute position at bottom of parent' },
                        { cls: 'absolute-left', desc: 'Absolute position at left of parent' },
                        { cls: 'absolute-right', desc: 'Absolute position at right of parent' },
                        { cls: 'absolute-top', desc: 'Absolute position at top of parent' },
                        { cls: 'absolute-top-left', desc: 'Absolute position at top-left of parent' },
                        { cls: 'absolute-top-right', desc: 'Absolute position at top-right of parent' },
                        { cls: 'absolute-bottom-left', desc: 'Absolute position at bottom-left of parent' },
                        { cls: 'absolute-bottom-right', desc: 'Absolute position at bottom-right of parent' },
                        { cls: 'relative-position', desc: 'Sets position to relative' },
                        { cls: 'z-top', desc: 'Sets z-index to the top (z-index: 7000)' },
                        { cls: 'z-max', desc: 'Sets z-index to the maximum (z-index: 9998)' },
                    ],
                },
                {
                    label: 'BORDER',
                    items: [
                        { cls: 'no-border', desc: 'Removes any border' },
                        { cls: 'no-border-radius', desc: 'Removes any border radius' },
                        { cls: 'no-box-shadow', desc: 'Removes any box shadow' },
                        { cls: 'no-outline', desc: 'Removes any outline' },
                        { cls: 'rounded-borders', desc: 'Applies a generic border radius' },
                        { cls: 'border-radius-inherit', desc: 'Inherits border radius from parent' },
                    ],
                },
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
.helperClasses {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.helperClasses_sectionLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-text-faint);
    padding-bottom: 6px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    margin-bottom: 4px;
}

.helperClasses_table {
    display: flex;
    flex-direction: column;
}

.helperClasses_row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 6px 8px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 3%, transparent);
}

.helperClasses_row:last-child {
    border-bottom: none;
}

.helperClasses_tags {
    flex-shrink: 0;
    min-width: 180px;
}

.helperClasses_tag {
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

.helperClasses_tag:hover {
    background: color-mix(in srgb, var(--q-accent) 15%, transparent);
}

.helperClasses_desc {
    font-family: var(--font-body);
    font-size: var(--q-text-size-small);
    color: inherit;
}
</style>
