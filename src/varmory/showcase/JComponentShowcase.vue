<template>
    <div class="q-pa-sm">
        <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-4 col-md-2">
                <ShowcaseNav
                    :active-tab="activeTab"
                    :selected-name="isDocPage ? null : selectedItem?.name"
                    :categories="components"
                    :doc-pages="docPageNames"
                    :active-doc="isDocPage ? activeTab : null"
                    @select="selectItem"
                    @select-doc="selectDoc"
                />
            </div>
            <div class="col-12 col-sm-8 col-md-10">
                <template v-if="isDocPage">
                    <ShowcaseDocs
                        :docs="docs"
                        :active-page="activeTab"
                        @navigate="selectDoc"
                    />
                </template>
                <template v-else>
                    <div class="row q-col-gutter-md">
                        <div class="col-12 col-md-6">
                            <ShowcaseMain :item="selectedItem" />
                        </div>
                        <div class="col-12 col-md-6">
                            <ShowcaseReference
                                :code="activeCode"
                                :code-key="selectedKey"
                                :has-api="hasApiDoc"
                                :docs-url="apiDocsUrl"
                                :title="apiTagName || selectedItem?.name || 'REFERENCE'"
                                :is-tag-name="!!apiTagName"
                            />
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <ShowcaseToast ref="toast" position="bottom" />
    </div>
</template>

<script>
import { copyToClipboard } from 'quasar';
import ComponentApiDoc from './ComponentApiDoc.js';
import ShowcaseNav from './components/ShowcaseNav.vue';
import ShowcaseMain from './components/ShowcaseMain.vue';
import ShowcaseReference from './components/ShowcaseReference.vue';
import ShowcaseToast from './components/ShowcaseToast.vue';
import ShowcaseDocs from './components/ShowcaseDocs.vue';
import extractTemplate from '../includes/extractTemplate.js';
import { resolveHash } from '../includes/showcaseHelpers.js';

export default {
    name: 'JComponentShowcase',
    mixins: [ComponentApiDoc],
    components: { ShowcaseNav, ShowcaseMain, ShowcaseReference, ShowcaseToast, ShowcaseDocs },
    props: {
        importFrom: {
            type: String,
            default: 'varmory',
        },
        components: {
            type: Object,
            default: () => ({}),
        },
        docs: {
            type: Object,
            default: () => ({}),
        },
    },
    provide() {
        return {
            showcaseCopy: (text, icon) => {
                copyToClipboard(text);
                const display = text.length > 60 ? text.slice(0, 57) + '...' : text;
                this.$refs.toast.notify(`Copied "${display}"`, icon || 'content_copy');
            },
        };
    },
    data() {
        const { tab, index } = resolveHash(this.components, this.docs);
        return {
            activeTab: tab,
            selectedIndex: index,
        };
    },
    computed: {
        activeItems() {
            return this.components[this.activeTab] || [];
        },
        selectedItem() {
            return this.activeItems[this.selectedIndex] || null;
        },
        activeCode() {
            return this.selectedItem?.code || extractTemplate(this.selectedItem?.raw) || '';
        },
        selectedKey() {
            return this.activeTab + '-' + this.selectedIndex;
        },
        hasApiDoc() {
            const comp = this.selectedItem?.component;
            return !!(comp?.apiJson || comp?.apiUrl || comp?.importName);
        },
        docPageNames() {
            return Object.keys(this.docs);
        },
        isDocPage() {
            return this.docPageNames.includes(this.activeTab);
        },
    },
    methods: {
        updateHash() {
            const name = this.isDocPage ? this.activeTab : this.selectedItem?.name;
            if (name) {
                const hash = this.isDocPage ? `#docs/${name}` : `#${this.activeTab}/${name}`;
                if (window.location.hash !== hash) {
                    history.replaceState(null, '', hash);
                }
            }
        },
        syncApiDoc() {
            const comp = this.selectedItem?.component;
            this.apiJson = comp?.apiJson || null;
            this.apiUrl = (!comp?.apiJson && comp?.apiUrl) ? comp.apiUrl : null;
            this.apiImportName = comp?.importName || null;
            this.apiImportFrom = comp?.importFrom || this.importFrom || null;
        },
        selectItem({ category, name }) {
            const items = this.components[category] || [];
            const idx = items.findIndex(i => i.name === name);
            this.activeTab = category;
            this.selectedIndex = idx >= 0 ? idx : 0;
        },
        selectDoc(page) {
            if (this.docs[page]) {
                this.activeTab = page;
            }
        },
        showToast(message, icon) {
            const id = ++toastId;
            this.toasts.push({ id, message, icon });
            setTimeout(() => {
                const idx = this.toasts.findIndex(t => t.id === id);
                if (idx >= 0) this.toasts.splice(idx, 1);
            }, 2500);
        },
    },
    mounted() {
        this._onHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) return;
            const [cat, name] = hash.split('/');
            if (cat === 'docs' && name && this.docs[name]) {
                this.selectDoc(name);
            } else if (cat && name && this.components[cat]) {
                this.selectItem({ category: cat, name });
            }
        };
        window.addEventListener('hashchange', this._onHashChange);
    },
    beforeUnmount() {
        window.removeEventListener('hashchange', this._onHashChange);
    },
    watch: {
        selectedItem: {
            immediate: true,
            handler() {
                this.syncApiDoc();
                this.updateHash();
            },
        },
        activeTab() {
            this.updateHash();
        },
    },
};
</script>

<style scoped>
.componentShowcase {
    padding: 0 24px;
}

.showcaseMainCol {
    flex-grow: 2 !important;
}

.showcaseCodeCol {
    flex-grow: 1 !important;
}

@media (max-width: 1100px) {
    .showcaseCodeCol {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

@media (max-width: 700px) {
    .showcaseMainCol {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .componentShowcase { padding: 0 12px; }
}

/* ── Toast notifications ── */
.showcaseToasts {
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;
    z-index: 9999;
    pointer-events: none;
}

.showcaseToast {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: #ffffff;
    color: #1a1a2e;
    border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
    border-radius: 4px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    pointer-events: auto;
}

.body--dark .showcaseToast {
    background: #1a1a2e;
    color: #ffffff;
}

.showcaseToast_icon {
    font-size: 16px;
    color: var(--q-info, #4fc3f7);
}

.showcaseToast_text {
    font-family: var(--font-mono, monospace);
    font-size: 12px;
    letter-spacing: 0.5px;
    color: inherit;
}

.showcaseToast-enter-active {
    transition: all 0.25s ease;
}

.showcaseToast-leave-active {
    transition: all 0.2s ease;
}

.showcaseToast-enter-from {
    opacity: 0;
    transform: translateY(12px);
}


.showcaseToast-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>

<style>
/* Shared card look for the showcase shell (nav / main / reference / docs).
   Non-scoped so child components can apply `.showcaseCard` directly. */
.showcaseCard {
    background: #fff;
    color: inherit;
}

.body--dark .showcaseCard {
    background: #000;
    color: inherit;
}
</style>
