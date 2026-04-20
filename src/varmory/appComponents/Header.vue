<template>
    <header class="header">
        <div class="header_frame">
            <div class="header_title">
                <span class="header_dot"></span>
                <span class="header_label">Varmory</span>
            </div>

            <div class="header_spacer"></div>

            <QBtn
                class="header_darkSwitcher"
                :icon="isDark ? 'dark_mode' : 'light_mode'"
                round
                flat
                size="sm"
                :color="isDark ? 'accent' : 'warning'"
                @click="$q.dark.toggle()"
            />
        </div>
    </header>
</template>

<script>
import { QBtn } from 'quasar';

export default {
    name: 'Header',
    components: { QBtn },
    computed: {
        isDark() {
            return this.$q.dark.isActive;
        },
    },
};
</script>

<style scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 100;
}

.header_frame {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 14px;
    background: var(--q-surface-2, #fff);
    color: var(--q-text, #1a1a1a);
    border-bottom: 1px solid var(--q-surface-border, rgba(0, 0, 0, 0.08));
    backdrop-filter: blur(16px);
}

.body--dark .header_frame {
    background: var(--q-surface-2, #111);
    color: var(--q-text, #fff);
    border-bottom-color: var(--q-surface-border, rgba(255, 255, 255, 0.08));
}

.header_title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-display, inherit);
    font-size: 11px;
    letter-spacing: 3px;
    font-weight: 600;
    color: var(--q-primary);
    text-transform: uppercase;
    user-select: none;
    text-wrap: nowrap;
}

.header_dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--q-primary);
    flex-shrink: 0;
}

.header_spacer {
    flex: 1;
}

.header_darkSwitcher {
    border: 1px solid var(--q-surface-border, rgba(0, 0, 0, 0.15));
    transition: all 0.25s ease;
}

.body--dark .header_darkSwitcher {
    border-color: var(--q-surface-border, rgba(255, 255, 255, 0.15));
}

.header_darkSwitcher:hover {
    border-color: color-mix(in srgb, var(--q-primary) 40%, transparent);
    box-shadow: 0 0 12px color-mix(in srgb, var(--q-primary) 20%, transparent);
}
</style>
