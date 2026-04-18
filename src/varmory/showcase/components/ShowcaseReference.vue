<template>
    <div class="showcaseCodeCol">
        <JPanel
            :title="isTagName ? null : title"
        >
            <template v-if="isTagName" #title>
                <div>
                <span class="showcaseReference_tagName" @click="copy('&lt;' + activeGroupName + '&gt;')">
                    <QIcon name="view_module" size="24px" class="jPanel_icon" color="secondary" />
                    {{ activeGroupName }}</span>
                &nbsp;<QBtn v-if="activeDocsUrl" color="accent" outline icon="open_in_new" :label="`Full ${activeComponentName} Docs`" :href="activeDocsUrl" target="_blank" size="md" dense />
                </div>
            </template>
            <template #footer>
            </template>
            <template #header-action>
                <div class="rightTabs">
                    <span
                        class="rightTab"
                        :class="{ active: activeTab === 'api', disabled: !hasApi }"
                        @click="hasApi && (activeTab = 'api')"
                    >
                        <QIcon name="description" size="20px" />
                        API
                    </span>
                    <span
                        class="rightTab"
                        :class="{ active: activeTab === 'code' }"
                        @click="activeTab = 'code'"
                    >
                        <QIcon name="code" size="20px" />
                        CODE
                    </span>
                </div>
            </template>

            <div v-if="activeTab === 'api' && hasApi" class="apiBlock">
                <div v-if="importNames.length" class="apiDocImport">
                    <code v-for="name in importNames" :key="name" class="apiDocCopyable" @click="copy(`import { ${name} } from '${importFrom}';`)"><span class="apiDocImportKeyword">import</span> { {{ name }} } <span class="apiDocImportKeyword">from</span> <span class="apiDocImportString">'{{ importFrom }}'</span>;<br></code>
                </div>
                <div v-if="apiGroups.length > 1" class="componentTabs">
                    <span
                        v-for="g in apiGroups"
                        :key="g.name"
                        class="componentTab"
                        :class="{ active: activeGroup === g.name }"
                        @click="activeGroup = g.name"
                    >{{ g.name }}</span>
                </div>
                <ApiDocSection :group="apiGroups.length > 1 ? activeGroup : null" hide-import />
            </div>
            <div v-else class="codeBlock relative-position" @mouseenter="showCodeCopyButton = true" @mouseleave="showCodeCopyButton = false">
                <transition name="codeFade" mode="out-in">
                    <JPanel style="max-height: 70vh;" scroll>
                        <div class="q-ma-sm">
                            <QMarkdown :src="codeMd" />
                        </div>
                    </JPanel>
                </transition>
                <transition name="codeFade" mode="out-in">
                    <QBtn v-if="showCodeCopyButton" color="primary" icon="content_copy" size="sm" round @click="copyCode" 
                        style="position: absolute; top: 32px; right: 32px;"/>
                </transition>
            </div>
        </JPanel>
    </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar';

import { QMarkdown } from '@quasar/quasar-ui-qmarkdown';
import '@quasar/quasar-ui-qmarkdown/dist/index.css';

import JPanel from '../../components/JPanel.vue';
import ApiDocSection from './ApiDocSection.vue';

export default {
    name: 'ShowcaseReference',
    components: { QMarkdown, QBtn, JPanel, ApiDocSection, QIcon },
    inject: ['showcaseCopy', '__apiDoc'],
    props: {
        code: {
            type: String,
            default: '',
        },
        codeKey: {
            type: String,
            default: '',
        },
        hasApi: {
            type: Boolean,
            default: false,
        },
        docsUrl: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: 'REFERENCE',
        },
        isTagName: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        apiGroups() {
            return this.__apiDoc?.groups || [];
        },
        activeGroupData() {
            return this.apiGroups.find(g => g.name === this.activeGroup) || this.apiGroups[0] || null;
        },
        activeGroupName() {
            if (this.apiGroups.length > 1 && this.activeGroupData?.name) return this.activeGroupData.name;
            return this.title;
        },
        activeDocsUrl() {
            if (this.apiGroups.length > 1 && this.activeGroupData) return this.activeGroupData.data?.meta?.docsUrl || null;
            return this.docsUrl;
        },
        activeComponentName() {
            const url = this.activeDocsUrl;
            if (!url) return '';
            const last = url.split('/').pop() || '';
            return last.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        },
        importFrom() {
            return this.__apiDoc?.importFrom || null;
        },
        importNames() {
            const n = this.__apiDoc?.importName;
            if (!n || !this.importFrom) return [];
            return Array.isArray(n) ? n : [n];
        },
        componentName() {
            if (!this.docsUrl) return '';
            const last = this.docsUrl.split('/').pop() || '';
            return last.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        },
        codeMd() {
            return "```html\n"+this.code+"\n```";
        }
    },
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
        copyCode() {
            this.copy(this.code);
        },
    },
    data() {
        return {
            activeTab: 'code',
            activeGroup: null,
            showCodeCopyButton: false,
        };
    },
    watch: {
        hasApi: {
            immediate: true,
            handler(val) {
                this.activeTab = val ? 'api' : 'code';
            },
        },
        apiGroups: {
            immediate: true,
            handler(groups) {
                if (groups.length > 0) this.activeGroup = groups[0].name;
            },
        },
    },
};
</script>

<style scoped>
.showcaseReference_tagName {
    cursor: pointer;
}

.showcaseReference_tagName:hover {
    text-decoration: underline;
    text-decoration-style: dashed;
    color: var(--q-primary);
}

.showcaseCodeCol {
    min-width: 0;
}

.rightTabs {
    display: flex;
    gap: 4px;
}

.rightTab {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: var(--q-text-muted);
    padding: 4px 10px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.15s ease;
    border: 1px solid transparent;
    user-select: none;
}

.rightTab:hover:not(.disabled) {
    color: var(--q-text);
    background: color-mix(in srgb, var(--q-text-bright) 3%, transparent);
}

.rightTab.active {
    color: var(--q-accent);
    border-color: var(--q-accent);
    background: color-mix(in srgb, var(--q-accent) 15%, transparent);
}

.rightTab.disabled {
    color: var(--q-text-faint);
    cursor: default;
    opacity: 0.4;
}

.apiDocImport {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    background: color-mix(in srgb, var(--q-surface-2) 60%, transparent);
    border: 1px solid var(--q-surface-border);
    border-radius: 3px;
    padding: 10px 14px;
    margin-bottom: 12px;
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

.apiDocCopyable {
    cursor: pointer;
}

.apiDocCopyable:hover {
    text-decoration: underline;
    text-decoration-style: dashed;
}

.componentTabs {
    display: flex;
    gap: 4px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--q-surface-border);
    padding-bottom: 8px;
}

.componentTab {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: var(--q-text-muted);
    padding: 4px 12px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.15s ease;
    user-select: none;
}

.componentTab:hover {
    color: var(--q-text);
    background: color-mix(in srgb, var(--q-text-bright) 3%, transparent);
}

.componentTab.active {
    color: var(--q-primary);
    background: color-mix(in srgb, var(--q-primary) 15%, transparent);
}

.apiBlock {
    padding: 16px;
}

.codeBlock {
    padding: 16px;
    min-height: 200px;
}

/* ── Transition ── */
.codeFade-enter-active,
.codeFade-leave-active {
    transition: opacity 0.15s ease;
}
.codeFade-enter-from,
.codeFade-leave-to {
    opacity: 0;
}
</style>
