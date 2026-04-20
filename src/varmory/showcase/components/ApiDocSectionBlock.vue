<template>
    <div v-if="items.length" class="apiDocSection">
        <div class="apiDocSectionHeader">
            <QIcon :name="icon" size="16px" />
            <span>{{ title }}</span>
        </div>
        <div class="apiDocTable">
            <template v-for="(item, idx) in items" :key="item.group + '/' + item.name">
                <div
                    v-if="hasGroups && item.group && (idx === 0 || items[idx - 1].group !== item.group)"
                    class="apiDocGroupLabel apiDocCopyable"
                    @click="copy('&lt;' + item.group + '&gt;')"
                >{{ item.group }}</div>
                <div class="apiDocRow" :class="{ apiDocRow_mixin: item.mixin }">
                    <div class="apiDocPropName apiDocCopyable" @click="copy(displayName(item))">
                        <span class="apiDocPropNameText" :title="displayName(item)">{{ displayName(item) }}</span>
                        <span v-if="item.required" class="apiDocPropRequired">*<QTooltip>Required</QTooltip></span>
                        <QTooltip v-if="item.mixin">Inherited from {{ item.mixin }}</QTooltip>
                    </div>
                    <div class="apiDocPropDesc">
                        {{ item.desc }}
                        <slot name="details" :item="item" :copy="copy" />
                    </div>
                    <div v-if="showType" class="apiDocPropType">{{ item.typeLabel }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { QIcon, QTooltip } from 'quasar';

export default {
    name: 'ApiDocSectionBlock',
    components: { QIcon, QTooltip },
    inject: ['showcaseCopy'],
    props: {
        title: { type: String, required: true },
        icon: { type: String, required: true },
        items: { type: Array, required: true },
        prefix: { type: String, default: '' },
        suffix: { type: String, default: '' },
        showType: { type: Boolean, default: false },
        hasGroups: { type: Boolean, default: false },
    },
    methods: {
        displayName(item) {
            return `${this.prefix}${item.name}${this.suffix}`;
        },
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
</script>

<style scoped>
.apiDocSection {
    margin-bottom: 16px;
}

.apiDocSectionHeader {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-accent);
    padding-bottom: 8px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-accent) 20%, transparent);
    margin-bottom: 8px;
}

.apiDocTable {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.apiDocRow {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 3px;
    transition: background 0.15s ease;
}

.apiDocRow:hover {
    background: color-mix(in srgb, var(--q-text-bright) 3%, transparent);
}

.apiDocCopyable {
    cursor: pointer;
}

.apiDocCopyable:hover {
    text-decoration: underline;
    text-decoration-style: dashed;
}

.apiDocPropName {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    font-weight: 600;
    color: var(--q-primary);
    flex: 0 0 180px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.apiDocPropNameText {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
}

.apiDocPropType {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-secondary);
    background: color-mix(in srgb, var(--q-secondary) 10%, transparent);
    padding: 1px 6px;
    border-radius: 2px;
}

.apiDocPropDesc {
    font-family: var(--font-body);
    font-size: var(--q-text-size-default);
    color: inherit;
    flex: 1;
    min-width: 150px;
}

.apiDocPropRequired {
    color: var(--q-negative);
    font-weight: 700;
    cursor: help;
    flex-shrink: 0;
}

.apiDocGroupLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1.5px;
    color: var(--q-info);
    padding: 6px 8px 2px;
    margin-top: 6px;
    border-top: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
}

.apiDocGroupLabel:first-child {
    margin-top: 0;
    border-top: none;
}

.apiDocRow_mixin .apiDocPropName {
    color: color-mix(in srgb, var(--q-primary) 75%, transparent);
    cursor: pointer;
}

/* Detail blocks (rendered via the `details` slot) — kept here so they share
   the section's scoped style boundary. */
:slotted(.apiDocCopyable) {
    cursor: pointer;
}

:slotted(.apiDocCopyable:hover) {
    text-decoration: underline;
    text-decoration-style: dashed;
}

:slotted(.apiDocPropDefault) {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: inherit;
}

:slotted(.apiDocPropDefault code) {
    color: var(--q-info);
    font-family: inherit;
}

:slotted(.apiDocPropExamples) {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-muted);
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 6px;
    margin-top: 2px;
}

:slotted(.apiDocPropExamplesLabel) {
    color: var(--q-text-muted);
}

:slotted(.apiDocPropExample) {
    color: var(--q-positive);
    font-family: inherit;
    background: color-mix(in srgb, var(--q-positive) 8%, transparent);
    padding: 1px 5px;
    border-radius: 2px;
    cursor: pointer;
}

:slotted(.apiDocPropValue) {
    color: var(--q-info);
    font-family: inherit;
    background: color-mix(in srgb, var(--q-info) 8%, transparent);
    padding: 1px 5px;
    border-radius: 2px;
    cursor: pointer;
}

:slotted(.apiDocSlotScope) {
    margin-top: 6px;
    padding: 6px 10px;
    background: color-mix(in srgb, currentColor 4%, transparent);
    border-left: 2px solid color-mix(in srgb, var(--q-info) 40%, transparent);
    border-radius: 2px;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
}

:slotted(.apiDocSlotScopeLabel) {
    color: var(--q-text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    margin-bottom: 4px;
}

:slotted(.apiDocSlotScopeRow) {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px;
    padding: 2px 0;
}

:slotted(.apiDocSlotScopeName) {
    color: var(--q-primary);
    font-family: inherit;
    flex-shrink: 0;
}

:slotted(.apiDocSlotScopeType) {
    color: var(--q-secondary);
    background: color-mix(in srgb, var(--q-secondary) 8%, transparent);
    padding: 0 5px;
    border-radius: 2px;
    flex-shrink: 0;
}

:slotted(.apiDocSlotScopeDesc) {
    color: inherit;
    font-family: var(--font-body);
    flex: 1;
    min-width: 150px;
}
</style>
