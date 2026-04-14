<template>
    <div class="apiDoc">
        <div v-if="doc.loading" class="apiDocLoading">
            <QSpinnerOrbit size="24px" color="accent" />
            <span>Loading API…</span>
        </div>

        <template v-else-if="doc.apiData || (doc.importName && doc.importFrom)">

            <!-- Import -->
            <div v-if="doc.importName && doc.importFrom" class="apiDocImport apiDocCopyable" @click="copy(importLine)">
                <code><span class="apiDocImportKeyword">import</span> { {{ doc.importName }} } <span class="apiDocImportKeyword">from</span> <span class="apiDocImportString">'{{ doc.importFrom }}'</span>;</code>
            </div>

            <!-- Props -->
            <div v-if="doc.propsList.length" class="apiDocSection">
                <div class="apiDocSectionHeader">
                    <QIcon name="tune" size="16px" />
                    <span>PROPS</span>
                </div>
                <div class="apiDocTable">
                    <template v-for="(prop, idx) in doc.propsList" :key="prop.group + '/' + prop.name">
                        <div
                            v-if="hasGroups && prop.group && (idx === 0 || doc.propsList[idx - 1].group !== prop.group)"
                            class="apiDocGroupLabel apiDocCopyable"
                            @click="copy('&lt;' + prop.group + '&gt;')"
                        >{{ prop.group }}</div>
                        <div class="apiDocRow">
                            <div class="apiDocPropName apiDocCopyable" @click="copy(prop.name)">{{ prop.name }}</div>
                            <div class="apiDocPropType">{{ prop.typeLabel }}</div>
                            <div class="apiDocPropDesc">{{ prop.desc }}</div>
                            <div v-if="prop.default !== undefined" class="apiDocPropDefault">
                                default: <code>{{ prop.default }}</code>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <!-- Slots -->
            <div v-if="doc.slotsList.length" class="apiDocSection">
                <div class="apiDocSectionHeader">
                    <QIcon name="inventory_2" size="16px" />
                    <span>SLOTS</span>
                </div>
                <div class="apiDocTable">
                    <template v-for="(slot, idx) in doc.slotsList" :key="slot.group + '/' + slot.name">
                        <div
                            v-if="hasGroups && slot.group && (idx === 0 || doc.slotsList[idx - 1].group !== slot.group)"
                            class="apiDocGroupLabel apiDocCopyable"
                            @click="copy('&lt;' + slot.group + '&gt;')"
                        >{{ slot.group }}</div>
                        <div class="apiDocRow">
                            <div class="apiDocPropName apiDocCopyable" @click="copy('#' + slot.name)">#{{ slot.name }}</div>
                            <div class="apiDocPropDesc">{{ slot.desc }}</div>
                        </div>
                    </template>
                </div>
            </div>

            <!-- Events -->
            <div v-if="doc.eventsList.length" class="apiDocSection">
                <div class="apiDocSectionHeader">
                    <QIcon name="electric_bolt" size="16px" />
                    <span>EVENTS</span>
                </div>
                <div class="apiDocTable">
                    <template v-for="(evt, idx) in doc.eventsList" :key="evt.group + '/' + evt.name">
                        <div
                            v-if="hasGroups && evt.group && (idx === 0 || doc.eventsList[idx - 1].group !== evt.group)"
                            class="apiDocGroupLabel apiDocCopyable"
                            @click="copy('&lt;' + evt.group + '&gt;')"
                        >{{ evt.group }}</div>
                        <div class="apiDocRow">
                            <div class="apiDocPropName apiDocCopyable" @click="copy('@' + evt.name)">@{{ evt.name }}</div>
                            <div class="apiDocPropDesc">{{ evt.desc }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </template>

        <div v-else-if="doc.error" class="apiDocError">
            <QIcon name="error_outline" size="14px" />
            <span>{{ doc.error }}</span>
        </div>
    </div>
</template>

<script>
import { QIcon, QSpinnerOrbit } from 'quasar';

export default {
    name: 'ApiDocSection',
    components: { QIcon, QSpinnerOrbit },
    inject: ['__apiDoc', 'showcaseCopy'],
    computed: {
        doc() {
            return this.__apiDoc;
        },
        importLine() {
            return `import { ${this.doc.importName} } from '${this.doc.importFrom}';`;
        },
        hasGroups() {
            const all = [...this.doc.propsList, ...this.doc.slotsList, ...this.doc.eventsList];
            const groups = new Set(all.map(i => i.group).filter(Boolean));
            return groups.size > 1;
        },
    },
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
</script>

<style scoped>
.apiDoc {
    margin-top: 12px;
}

.apiDocLoading {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text);
    padding: 12px 0;
}

.apiDocError {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-negative);
    padding: 8px 0;
}

.apiDocImport {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    background: color-mix(in srgb, var(--q-surface-2) 60%, transparent);
    border: 1px solid var(--q-surface-border);
    border-radius: 3px;
    padding: 10px 14px;
    margin-bottom: 16px;
}

.apiDocImport code {
    color: var(--q-text);
}

.apiDocImportKeyword {
    color: var(--q-accent);
}

.apiDocImportString {
    color: var(--q-positive);
}

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
    min-width: 120px;
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
    color: var(--q-text);
    flex: 1;
    min-width: 150px;
}

.apiDocPropDefault {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text);
}

.apiDocPropDefault code {
    color: var(--q-info);
    font-family: inherit;
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
</style>
