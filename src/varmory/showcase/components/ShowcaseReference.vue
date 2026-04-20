<template>
    <div class="showcaseCodeCol">
        <QCard class="showcaseCard" flat>
            <div class="showcaseReference_header">
                <div class="showcaseReference_titleBlock">
                    <template v-if="isTagName">
                        <span class="showcaseReference_tagName" @click="copy('&lt;' + activeGroupName + '&gt;')">
                            <QIcon name="view_module" size="24px" color="secondary" />
                            {{ activeGroupName }}
                        </span>
                        <QBtn v-if="activeDocsUrl" color="accent" outline icon="open_in_new" :label="`Full ${activeComponentName} Docs`" :href="activeDocsUrl" target="_blank" size="md" dense />
                    </template>
                    <template v-else>
                        <span class="showcaseReference_title">{{ title }}</span>
                    </template>
                </div>
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
            </div>

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
                    <div class="showcaseReference_codeScroll">
                        <div class="q-ma-sm">
                            <QMarkdown :src="codeMd" />
                        </div>
                    </div>
                </transition>
                <transition name="codeFade" mode="out-in">
                    <QBtn v-if="showCodeCopyButton" color="primary" icon="content_copy" size="sm" round @click="copyCode"
                        style="position: absolute; top: 32px; right: 32px;"/>
                </transition>
            </div>
        </QCard>
    </div>
</template>

<script>
import { QBtn, QCard, QIcon } from 'quasar';

import { QMarkdown } from '@quasar/quasar-ui-qmarkdown';
import '@quasar/quasar-ui-qmarkdown/dist/index.css';

import ApiDocSection from './ApiDocSection.vue';

export default {
    name: 'ShowcaseReference',
    components: { QMarkdown, QBtn, QCard, ApiDocSection, QIcon },
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
                if (!groups.length) return;
                // Only set when the current selection isn't already valid.
                if (groups.some(g => g.name === this.activeGroup)) return;
                this.activeGroup = groups[0].name;
            },
        },
    },
};
</script>

<style scoped>
.showcaseReference_header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border-bottom: 1px solid color-mix(in srgb, currentColor 10%, transparent);
    user-select: none;
}

.showcaseReference_titleBlock {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    flex: 1;
}

.showcaseReference_title {
    font-family: var(--font-display, inherit);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    color: inherit;
}

.showcaseReference_codeScroll {
    max-height: 70vh;
    overflow-y: auto;
}

.showcaseReference_tagName {
    display: flex;
    align-items: center;
    gap: 6px;
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
    color: inherit;
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
    background: color-mix(in srgb, currentColor 4%, transparent);
    border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
    border-radius: 3px;
    padding: 10px 14px;
    margin-bottom: 12px;
}

.apiDocImport code {
    color: inherit;
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
    border-bottom: 1px solid color-mix(in srgb, currentColor 15%, transparent);
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
    color: inherit;
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
