<template>
    <QBtn
        class="jDarkSwitcher"
        :icon="isDark ? 'dark_mode' : 'light_mode'"
        round
        flat
        size="sm"
        :color="isDark ? 'accent' : 'warning'"
        @click="toggle"
    />
</template>

<script>
import { QBtn } from 'quasar';
import { useThemeStore } from '../../stores/theme.js';

export default {
    name: 'JDarkSwitcher',
    components: { QBtn },
    computed: {
        themeStore() {
            try {
                return useThemeStore();
            } catch (e) {
                return null;
            }
        },
        isDark() {
            return this.themeStore?.isDark ?? false;
        },
    },
    methods: {
        toggle() {
            if (!this.themeStore) return;
            this.themeStore.toggleDark();
        },
    },
};
</script>

<style scoped>
.jDarkSwitcher {
    border: 1px solid var(--q-surface-border);
    transition: all 0.25s ease;
}

.jDarkSwitcher:hover {
    border-color: color-mix(in srgb, var(--q-primary) 40%, transparent);
    box-shadow: 0 0 12px color-mix(in srgb, var(--q-primary) 20%, transparent);
}
</style>
