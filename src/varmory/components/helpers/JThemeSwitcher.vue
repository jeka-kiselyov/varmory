<template>
    <QSelect
        :model-value="currentTheme"
        :options="themeOptions"
        :disable="themeLocked"
        option-value="value"
        option-label="label"
        emit-value
        map-options
        class="jThemeSwitcher"
        popup-content-class="jThemeSwitcher_popup"
        @update:model-value="switchTheme"
    >
        <template #prepend>
            <QIcon :name="themeIcons[currentTheme] || 'brush'" size="16px" class="jThemeSwitcher_selectIcon" />
        </template>
        <template #option="{ itemProps, opt }">
            <QItem v-bind="itemProps" class="jThemeSwitcher_popupItem">
                <QItemSection avatar>
                    <QIcon :name="themeIcons[opt.value] || 'brush'" size="16px" />
                </QItemSection>
                <QItemSection>{{ opt.label }}</QItemSection>
            </QItem>
        </template>
    </QSelect>
</template>

<script>
import { QSelect, QIcon, QItem, QItemSection } from 'quasar';
import { useThemeStore } from '../../stores/theme.js';

export default {
    name: 'JThemeSwitcher',
    components: { QSelect, QIcon, QItem, QItemSection },
    data() {
        return {
            themeIcons: {
                default: 'palette',
                rpg: 'auto_fix_high',
                space: 'rocket_launch',
                finance: 'account_balance',
            },
        };
    },
    computed: {
        themeStore() {
            try {
                return useThemeStore();
            } catch (e) {
                return null;
            }
        },
        themeNames() {
            const themes = this.themeStore?.themes;
            return themes ? Object.keys(themes) : [];
        },
        themeOptions() {
            return this.themeNames.map(name => ({
                value: name,
                label: name.charAt(0).toUpperCase() + name.slice(1),
            }));
        },
        currentTheme() {
            return this.themeStore?.currentTheme ?? null;
        },
        themeLocked() {
            return this.themeStore?.themeLocked ?? true;
        },
    },
    methods: {
        async switchTheme(name) {
            if (name === this.currentTheme) return;
            const themeStore = this.themeStore;
            themeStore.currentTheme = name;

            const overlay = document.createElement('div');
            overlay.className = 'jThemeSwitcher_overlay';
            document.body.appendChild(overlay);
            overlay.offsetHeight;
            overlay.classList.add('active');

            await new Promise(r => setTimeout(r, 150));
            await themeStore.applyTheme(name, themeStore.isDark);
            await new Promise(r => setTimeout(r, 200));

            overlay.classList.remove('active');
            overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
        },
    },
};
</script>
<style>
.jThemeSwitcher_overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.0);
    backdrop-filter: blur(0px);
    opacity: 0;
    transition: opacity 0.15s ease, backdrop-filter 0.15s ease;
    pointer-events: none;
}

.jThemeSwitcher_overlay.active {
    opacity: 1;
    backdrop-filter: blur(4px);
}

</style>
