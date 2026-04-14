<template>
    <div class="showcaseCodeCol">
        <JPanel
            :title="isTagName ? null : title"
        >
            <template v-if="isTagName" #title>
                <div>
                
                <span class="showcaseReference_tagName" @click="copy('&lt;' + title + '&gt;')">
                    <QIcon name="view_module" size="24px" class="jPanel_icon" color="secondary" />
                    {{ title }}</span>
                <!-- External docs link -->
                &nbsp;<QBtn v-if="docsUrl" color="accent" outline icon="open_in_new" :label="`Full ${componentName} Docs`" :href="docsUrl" target="_blank" size="md" dense />
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
                <ApiDocSection />
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
    inject: ['showcaseCopy'],
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
