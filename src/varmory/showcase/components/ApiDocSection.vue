<template>
    <div class="apiDoc">
        <div v-if="doc.loading" class="apiDocLoading">
            <QSpinnerOrbit size="24px" color="accent" />
            <span>Loading API…</span>
        </div>

        <template v-else-if="doc.apiData || (doc.importName && doc.importFrom)">

            <!-- Import -->
            <div v-if="!hideImport && doc.importName && doc.importFrom" class="apiDocImport">
                <code v-for="name in importNames" :key="name" class="apiDocCopyable" @click="copy(`import { ${name} } from '${doc.importFrom}';`)"><span class="apiDocImportKeyword">import</span> { {{ name }} } <span class="apiDocImportKeyword">from</span> <span class="apiDocImportString">'{{ doc.importFrom }}'</span>;<br></code>
            </div>

            <!-- Props -->
            <div v-if="propsList.length" class="apiDocSection">
                <div class="apiDocSectionHeader">
                    <QIcon name="tune" size="16px" />
                    <span>PROPS</span>
                </div>
                <div class="apiDocTable">
                    <template v-for="(prop, idx) in propsList" :key="prop.group + '/' + prop.name">
                        <div
                            v-if="hasGroups && prop.group && (idx === 0 || propsList[idx - 1].group !== prop.group)"
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
            <div v-if="slotsList.length" class="apiDocSection">
                <div class="apiDocSectionHeader">
                    <QIcon name="inventory_2" size="16px" />
                    <span>SLOTS</span>
                </div>
                <div class="apiDocTable">
                    <template v-for="(slot, idx) in slotsList" :key="slot.group + '/' + slot.name">
                        <div
                            v-if="hasGroups && slot.group && (idx === 0 || slotsList[idx - 1].group !== slot.group)"
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
            <div v-if="eventsList.length" class="apiDocSection">
                <div class="apiDocSectionHeader">
                    <QIcon name="electric_bolt" size="16px" />
                    <span>EVENTS</span>
                </div>
                <div class="apiDocTable">
                    <template v-for="(evt, idx) in eventsList" :key="evt.group + '/' + evt.name">
                        <div
                            v-if="hasGroups && evt.group && (idx === 0 || eventsList[idx - 1].group !== evt.group)"
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
    props: {
        group: { type: String, default: null },
        hideImport: { type: Boolean, default: false },
    },
    computed: {
        doc() {
            return this.__apiDoc;
        },
        propsList() {
            return this.group ? this.doc.propsList.filter(p => p.group === this.group) : this.doc.propsList;
        },
        slotsList() {
            return this.group ? this.doc.slotsList.filter(s => s.group === this.group) : this.doc.slotsList;
        },
        eventsList() {
            return this.group ? this.doc.eventsList.filter(e => e.group === this.group) : this.doc.eventsList;
        },
        importNames() {
            const n = this.doc.importName;
            return Array.isArray(n) ? n : [n];
        },
        importLine() {
            return this.importNames.map(n => `import { ${n} } from '${this.doc.importFrom}';`).join('\n');
        },
        hasGroups() {
            const all = [...this.propsList, ...this.slotsList, ...this.eventsList];
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
