<template>
    <div class="showcaseNav_col">
        <QCard class="showcaseCard" flat>
            <div class="showcaseNav_header">
                <QIcon name="widgets" size="14px" color="secondary" />
                <span>COMPONENTS</span>
            </div>
            <div class="showcaseNav_search">
                <QIcon name="search" size="20px" class="showcaseNav_searchIcon" />
                <input
                    v-model="query"
                    class="showcaseNav_searchInput"
                    placeholder="Search components…"
                    spellcheck="false"
                />
                <QIcon
                    v-if="query"
                    name="close"
                    size="20px"
                    class="showcaseNav_searchClear"
                    @click="query = ''"
                />
            </div>

            <!-- Doc pages -->
            <div v-if="docPages && docPages.length" class="showcaseNav_list showcaseNav_docs">
                <div
                    class="showcaseNav_categoryHeader"
                    :class="{ expanded: docsExpanded || activeDoc }"
                    @click="toggleDocs"
                >
                    <QIcon name="menu_book" size="18px" />
                    <span>Readme</span>
                    <span class="showcaseNav_spacer"></span>
                    <QIcon
                        v-if="subDocPages.length"
                        name="expand_more"
                        size="16px"
                        class="showcaseNav_chevron"
                        :class="{ rotated: docsExpanded }"
                    />
                </div>
                <transition @enter="slideEnter" @after-enter="slideAfterEnter" @leave="slideLeave" @after-leave="slideAfterLeave">
                    <div v-if="docsExpanded && subDocPages.length" class="showcaseNav_children">
                        <div
                            v-for="page in subDocPages"
                            :key="'doc-' + page"
                            class="showcaseNav_item showcaseNav_child"
                            :class="{ active: activeDoc === page }"
                            @click="$emit('select-doc', page)"
                        >
                            <span>{{ page }}</span>
                        </div>
                    </div>
                </transition>
            </div>

            <template v-if="query">
                <div class="showcaseNav_list">
                    <div
                        v-for="item in searchResults"
                        :key="item.category + '/' + item.name"
                        class="showcaseNav_item"
                        :class="{ active: activeTab === item.category && selectedName === item.name }"
                        @click="$emit('select', { category: item.category, name: item.name })"
                    >
                        <QIcon :name="categoryIcons[item.category] || 'folder'" size="18px" />
                        <div class="showcaseNav_result">
                            <span>{{ item.label }}</span>
                            <span class="showcaseNav_resultCat">{{ item.category }}</span>
                        </div>
                    </div>
                    <div v-if="!searchResults.length" class="showcaseNav_empty">
                        No results
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="showcaseNav_list">
                    <div v-for="cat in tabs" :key="cat" class="showcaseNav_category">
                        <div
                            class="showcaseNav_categoryHeader"
                            :class="{ expanded: expandedCats[cat] }"
                            @click="toggleCategory(cat)"
                        >
                            <QIcon :name="categoryIcons[cat] || 'folder'" size="18px" />
                            <span>{{ cat }}</span>
                            <span class="showcaseNav_count">{{ categoryItems(cat).length }}</span>
                            <QIcon
                                name="expand_more"
                                size="16px"
                                class="showcaseNav_chevron"
                                :class="{ rotated: expandedCats[cat] }"
                            />
                        </div>
                        <transition @enter="slideEnter" @after-enter="slideAfterEnter" @leave="slideLeave" @after-leave="slideAfterLeave">
                            <div v-if="expandedCats[cat]" class="showcaseNav_children">
                                <div
                                    v-for="item in categoryItems(cat)"
                                    :key="item.name"
                                    class="showcaseNav_item showcaseNav_child"
                                    :class="{ active: activeTab === cat && selectedName === item.name }"
                                    @click="$emit('select', { category: cat, name: item.name })"
                                >
                                    <span>{{ item.label }}</span>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </template>
        </QCard>

    </div>
</template>

<script>
import { QCard, QIcon } from 'quasar';

export default {
    name: 'ShowcaseNav',
    components: { QCard, QIcon },
    props: {
        activeTab: {
            type: String,
            required: true,
        },
        selectedName: {
            type: String,
            default: null,
        },
        categories: {
            type: Object,
            required: true,
        },
        docPages: {
            type: Array,
            default: () => [],
        },
        activeDoc: {
            type: String,
            default: null,
        },
    },
    emits: ['select', 'select-doc'],
    data() {
        const expanded = {};
        for (const cat of Object.keys(this.categories)) {
            expanded[cat] = cat === this.activeTab;
        }
        return {
            query: '',
            expandedCats: expanded,
            docsExpanded: this.activeDoc && this.activeDoc !== 'README',
        };
    },
    computed: {
        subDocPages() {
            return this.docPages.filter(p => p !== 'README');
        },
        categoryIcons() {
            const icons = {};
            for (const [cat, items] of Object.entries(this.categories)) {
                const counts = {};
                let bestOrder = {};
                for (const item of items) {
                    const icon = item.icon;
                    if (!icon) continue;
                    counts[icon] = (counts[icon] || 0) + 1;
                    const order = item.order ?? 999;
                    if (!(icon in bestOrder) || order < bestOrder[icon]) {
                        bestOrder[icon] = order;
                    }
                }
                let winner = null;
                let winCount = 0;
                let winOrder = Infinity;
                for (const [icon, count] of Object.entries(counts)) {
                    if (count > winCount || (count === winCount && bestOrder[icon] < winOrder)) {
                        winner = icon;
                        winCount = count;
                        winOrder = bestOrder[icon];
                    }
                }
                icons[cat] = winner || 'folder';
            }
            return icons;
        },
        tabs() {
            return Object.keys(this.categories);
        },
        searchIndex() {
            const index = [];
            for (const [cat, items] of Object.entries(this.categories)) {
                for (const item of items) {
                    const apiJson = item.component?.apiJson;
                    let apiText = '';
                    // const docs = Array.isArray(apiJson) ? apiJson.map(e => e.json || e) : apiJson ? [apiJson] : [];
                    // for (const doc of docs) {
                    //     if (doc?.props) apiText += ' ' + Object.entries(doc.props).map(([k, v]) => k + ' ' + (v.desc || '')).join(' ');
                    //     if (doc?.slots) apiText += ' ' + Object.entries(doc.slots).map(([k, v]) => k + ' ' + (v.desc || '')).join(' ');
                    //     if (doc?.events) apiText += ' ' + Object.entries(doc.events).map(([k, v]) => k + ' ' + (v.desc || '')).join(' ');
                    // }
                    index.push({
                        category: cat,
                        name: item.name,
                        label: item.label,
                        searchable: (cat + ' ' + item.name + ' ' + item.label + ' ' + (item.code || '') + apiText).toLowerCase(),
                    });
                }
            }
            return index;
        },
        searchResults() {
            const q = this.query.trim().toLowerCase();
            if (!q) return [];
            const terms = q.split(/\s+/);
            return this.searchIndex.filter(entry =>
                terms.every(t => entry.searchable.includes(t))
            );
        },
    },
    methods: {
        categoryItems(cat) {
            return this.categories[cat] || [];
        },
        slideEnter(el) {
            el.style.overflow = 'hidden';
            el.style.height = '0';
            el.offsetHeight; // force reflow
            el.style.transition = 'height 0.25s ease';
            el.style.height = el.scrollHeight + 'px';
        },
        slideAfterEnter(el) {
            el.style.height = '';
            el.style.overflow = '';
            el.style.transition = '';
        },
        slideLeave(el) {
            el.style.overflow = 'hidden';
            el.style.height = el.scrollHeight + 'px';
            el.offsetHeight; // force reflow
            el.style.transition = 'height 0.25s ease';
            el.style.height = '0';
        },
        slideAfterLeave(el) {
            el.style.height = '';
            el.style.overflow = '';
            el.style.transition = '';
        },
        toggleDocs() {
            if (this.subDocPages.length) {
                this.docsExpanded = !this.docsExpanded;
            }
            this.$emit('select-doc', 'README');
        },
        toggleCategory(cat) {
            const opening = !this.expandedCats[cat];
            this.expandedCats[cat] = opening;
            if (opening) {
                clearTimeout(this._collapseTimer);
                this._collapseTimer = setTimeout(() => {
                    for (const key in this.expandedCats) {
                        if (key !== cat) this.expandedCats[key] = false;
                    }
                }, 500);
            }
            const items = this.categoryItems(cat);
            if (items.length) {
                this.$emit('select', { category: cat, name: items[0].name });
            }
        },
    },
    watch: {
        activeTab(cat) {
            if (!this.expandedCats[cat]) {
                this.expandedCats[cat] = true;
            }
        },
        categories(cats) {
            for (const cat of Object.keys(cats)) {
                if (!(cat in this.expandedCats)) {
                    this.expandedCats[cat] = false;
                }
            }
        },
        activeDoc(page) {
            if (page && page !== 'README') {
                this.docsExpanded = true;
            }
        },
    },
};
</script>

<style scoped>
.showcaseNav_col {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.showcaseNav_header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    font-family: var(--font-display, inherit);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    color: inherit;
    border-bottom: 1px solid color-mix(in srgb, currentColor 10%, transparent);
    user-select: none;
}

.showcaseNav_search {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 8px 8px 0;
    padding: 6px 10px;
    border-radius: 3px;
    border: 1px solid color-mix(in srgb, var(--q-primary) 8%, transparent);
    transition: border-color 0.15s ease;
}

.showcaseNav_search:focus-within {
    border-color: color-mix(in srgb, var(--q-primary) 13%, transparent);
}

.showcaseNav_searchIcon {
    color: color-mix(in srgb, var(--q-primary) 75%, transparent);
    flex-shrink: 0;
}

.showcaseNav_searchInput {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    letter-spacing: 0.5px;
    color: inherit;
    min-width: 0;
}

.showcaseNav_searchInput::placeholder {
    color: var(--q-text-faint, inherit);
}

.showcaseNav_searchClear {
    color: var(--q-text-faint, inherit);
    cursor: pointer;
    flex-shrink: 0;
    transition: color 0.15s ease;
}

.showcaseNav_searchClear:hover {
    color: inherit;
}

.showcaseNav_list {
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 2px;
}

/* ── Category header ── */
.showcaseNav_categoryHeader {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border-radius: 3px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.15s ease;
    user-select: none;
}

.showcaseNav_categoryHeader:hover {
    background: color-mix(in srgb, var(--q-primary) 13%, transparent);
}

.showcaseNav_categoryHeader.expanded {
}

.showcaseNav_count {
    margin-left: auto;
    background: color-mix(in srgb, var(--q-primary) 13%, transparent);
    padding: 1px 6px;
    border-radius: 8px;
    min-width: 18px;
    text-align: center;
}

.showcaseNav_chevron {
    transition: transform 0.2s ease;
    flex-shrink: 0;
}

.showcaseNav_chevron.rotated {
    transform: rotate(180deg);
}

/* ── Children ── */
.showcaseNav_children {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-left: 18px;
    overflow: hidden;
}

.showcaseNav_child {
    padding: 5px 10px !important;
    letter-spacing: 0.5px !important;
}

.showcaseNav_child:hover {
    color: color-mix(in srgb, var(--q-accent) 75%, transparent) !important;
}

.showcaseNav_child.active {
    color: var(--q-accent) !important;
}

/* ── Generic item ── */
.showcaseNav_item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 3px;
    cursor: pointer;
    letter-spacing: 1px;
    border: 1px solid transparent;
    transition: all 0.15s ease;
}

.showcaseNav_item:hover {
}

.showcaseNav_item.active {
    color: var(--q-accent);
    border-color: color-mix(in srgb, var(--q-accent) 30%, transparent);
    background: color-mix(in srgb, var(--q-accent) 10%, transparent);
}

/* ── Search result ── */
.showcaseNav_result {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
}

.showcaseNav_resultCat {
    letter-spacing: 1.5px;
}

.showcaseNav_empty {
    padding: 12px;
    text-align: center;
}

.showcaseNav_spacer {
    flex: 1;
}

.showcaseNav_docs {
    border-bottom: 1px solid color-mix(in srgb, var(--q-primary) 10%, transparent);
    padding-bottom: 4px;
    margin-bottom: 0;
}

</style>
