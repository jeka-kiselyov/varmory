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
            <ApiDocSectionBlock title="PROPS" icon="tune" :items="propsList" :has-groups="hasGroups" show-type>
                <template #details="{ item, copy: copyValue }">
                    <div v-if="item.default !== undefined" class="apiDocPropDefault">
                        default: <code>{{ item.default }}</code>
                    </div>
                    <div v-if="item.values.length" class="apiDocPropExamples">
                        <span class="apiDocPropExamplesLabel">values:</span>
                        <code
                            v-for="v in item.values"
                            :key="v"
                            class="apiDocPropValue apiDocCopyable"
                            @click.stop="copyValue(v)"
                        >{{ stripQuotes(v) }}</code>
                    </div>
                    <div v-if="item.examples.length" class="apiDocPropExamples">
                        <span class="apiDocPropExamplesLabel">examples:</span>
                        <code
                            v-for="ex in item.examples"
                            :key="ex"
                            class="apiDocPropExample apiDocCopyable"
                            @click.stop="copyValue(ex)"
                        >{{ stripQuotes(ex) }}</code>
                    </div>
                </template>
            </ApiDocSectionBlock>

            <!-- Slots -->
            <ApiDocSectionBlock title="SLOTS" icon="inventory_2" :items="slotsList" :has-groups="hasGroups" prefix="#">
                <template #details="{ item, copy: copyValue }">
                    <div v-if="item.scope.length" class="apiDocSlotScope">
                        <div class="apiDocSlotScopeLabel">scope props (v-slot="props"):</div>
                        <div
                            v-for="s in item.scope"
                            :key="s.name"
                            class="apiDocSlotScopeRow"
                        >
                            <code class="apiDocSlotScopeName apiDocCopyable" @click.stop="copyValue('props.' + s.name)">{{ s.name }}</code>
                            <span class="apiDocSlotScopeType">{{ s.typeLabel }}</span>
                            <span class="apiDocSlotScopeDesc">{{ s.desc }}</span>
                        </div>
                    </div>
                </template>
            </ApiDocSectionBlock>

            <!-- Events -->
            <ApiDocSectionBlock title="EVENTS" icon="electric_bolt" :items="eventsList" :has-groups="hasGroups" prefix="@">
                <template #details="{ item }">
                    <div v-if="item.params.length" class="apiDocSlotScope">
                        <div class="apiDocSlotScopeLabel">payload:</div>
                        <div
                            v-for="p in item.params"
                            :key="p.name"
                            class="apiDocSlotScopeRow"
                        >
                            <code class="apiDocSlotScopeName">{{ p.name }}</code>
                            <span class="apiDocSlotScopeType">{{ p.typeLabel }}</span>
                            <span class="apiDocSlotScopeDesc">{{ p.desc }}</span>
                        </div>
                    </div>
                </template>
            </ApiDocSectionBlock>

            <!-- Methods -->
            <ApiDocSectionBlock title="METHODS" icon="functions" :items="methodsList" :has-groups="hasGroups" suffix="()">
                <template #details="{ item }">
                    <div v-if="item.params.length" class="apiDocSlotScope">
                        <div class="apiDocSlotScopeLabel">params:</div>
                        <div
                            v-for="p in item.params"
                            :key="p.name"
                            class="apiDocSlotScopeRow"
                        >
                            <code class="apiDocSlotScopeName">{{ p.name }}<span v-if="p.required" class="apiDocPropRequired">*</span></code>
                            <span class="apiDocSlotScopeType">{{ p.typeLabel }}</span>
                            <span class="apiDocSlotScopeDesc">{{ p.desc }}</span>
                        </div>
                    </div>
                    <div v-if="item.returns" class="apiDocSlotScope">
                        <div class="apiDocSlotScopeLabel">returns:</div>
                        <div class="apiDocSlotScopeRow">
                            <span class="apiDocSlotScopeType">{{ item.returns.typeLabel }}</span>
                            <span class="apiDocSlotScopeDesc">{{ item.returns.desc }}</span>
                        </div>
                    </div>
                </template>
            </ApiDocSectionBlock>
        </template>

        <div v-else-if="doc.error" class="apiDocError">
            <QIcon name="error_outline" size="14px" />
            <span>{{ doc.error }}</span>
        </div>
    </div>
</template>

<script>
import { QIcon, QSpinnerOrbit } from 'quasar';
import ApiDocSectionBlock from './ApiDocSectionBlock.vue';

export default {
    name: 'ApiDocSection',
    components: { QIcon, QSpinnerOrbit, ApiDocSectionBlock },
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
        methodsList() {
            return this.group ? (this.doc.methodsList || []).filter(m => m.group === this.group) : (this.doc.methodsList || []);
        },
        importNames() {
            const n = this.doc.importName;
            return Array.isArray(n) ? n : [n];
        },
        hasGroups() {
            const all = [...this.propsList, ...this.slotsList, ...this.eventsList, ...this.methodsList];
            const groups = new Set(all.map(i => i.group).filter(Boolean));
            return groups.size > 1;
        },
    },
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
        stripQuotes(s) {
            if (typeof s !== 'string') return s;
            const m = s.match(/^(['"])(.*)\1$/);
            return m ? m[2] : s;
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
    color: inherit;
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
    background: color-mix(in srgb, currentColor 4%, transparent);
    border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
    border-radius: 3px;
    padding: 10px 14px;
    margin-bottom: 16px;
}

.apiDocImport code {
    color: inherit;
    cursor: pointer;
}

.apiDocImport code:hover {
    text-decoration: underline;
    text-decoration-style: dashed;
}

.apiDocImportKeyword {
    color: var(--q-accent);
}

.apiDocImportString {
    color: var(--q-positive);
}

.apiDocCopyable {
    cursor: pointer;
}

.apiDocCopyable:hover {
    text-decoration: underline;
    text-decoration-style: dashed;
}
</style>
