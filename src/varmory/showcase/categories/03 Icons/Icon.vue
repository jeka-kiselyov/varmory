<template>
    <div class="iconShowcase">

        <div class="iconControls">
            <QInput
                v-model="search"
                dense
                outlined
                placeholder="Filter icons..."
                color="accent"
                class="iconSearch"
            >
                <template #prepend>
                    <QIcon name="search" size="16px" />
                </template>
                <template v-if="search" #append>
                    <QIcon name="close" size="14px" class="cursor-pointer" @click="search = ''" />
                </template>
            </QInput>

            <QTabs
                v-model="category"
                dense
                active-color="accent"
                indicator-color="accent"
                align="left"
                narrow-indicator
                no-caps
                class="iconTabs"
            >
                <QTab name="all" label="All" />
                <QTab v-for="cat in allCategories" :key="cat" :name="cat" :label="cat" />
            </QTabs>
        </div>

        <div class="iconStats">
            {{ filtered.length }} icons
        </div>

        <div class="iconGrid non-selectable">
            <div
                v-for="ic in filtered"
                :key="ic[0]"
                class="iconCell"
                @click="onCopy(ic)"
            >
                <QIcon :name="ic[0]" size="36px" />
                <span class="iconLabel text-truncate">{{ ic[0] }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { QIcon, QInput, QTabs, QTab } from 'quasar';
import QIconApi from 'quasar/src/components/icon/QIcon.json';
import allIcons from '../../definitions/materialIcons.js';

const allCategories = [...new Set(allIcons.map(i => i[1]))].sort();

export default {
    inject: ['showcaseCopy'],
    name: 'ShowcaseIcon',
    label: 'Material Icons',
    icon: 'emoji_symbols',
    components: { QIcon, QInput, QTabs, QTab },
    apiJson: QIconApi,
    importName: 'QIcon',
    importFrom: 'quasar',
    code: `<QIcon name="home" size="24px" />
<QIcon name="star" color="primary" size="32px" />
<QIcon name="settings" size="24px" />

<!-- With color -->
<QIcon name="favorite" color="negative" />

<!-- In a button -->
<QBtn icon="send" label="Send" />`,
    data() {
        return {
            search: '',
            category: 'all',
            allCategories,
        };
    },
    computed: {
        filtered() {
            let list = allIcons;
            if (this.category !== 'all') {
                list = list.filter(i => i[1] === this.category);
            }
            if (this.search) {
                const q = this.search.toLowerCase().replace(/\s+/g, '_');
                list = list.filter(i => i[0].includes(q));
            }
            return list;
        },
    },
    watch: {
        search(val) {
            if (val) {
                this.category = 'all';
            }
        },
    },
    methods: {
        onCopy(ic) {
            this.showcaseCopy(ic[0], ic[0]);
        },
    },
};
</script>

<style scoped>
.iconShowcase {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.iconControls {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.iconTabs {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
}

.iconTabs :deep(.q-tab__label) {
    font-size: var(--q-text-size-small);
    letter-spacing: 0.3px;
    text-transform: capitalize;
}

.iconStats {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: inherit;
}

.iconGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 4px;
}

.iconCell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 10px 4px 8px;
    border-radius: 3px;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 5%, transparent);
    cursor: pointer;
    transition: all 0.15s ease;
    color: inherit;
    min-width: 0;
    overflow: hidden;
}

.iconCell:hover {
    border-color: color-mix(in srgb, var(--q-accent) 30%, transparent);
    background: color-mix(in srgb, var(--q-accent) 5%, transparent);
}

.iconLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 0.3px;
    color: var(--q-text-bright);
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.iconLoadMore {
    display: flex;
    justify-content: center;
    padding: 8px 0;
}
</style>
