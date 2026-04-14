<template>
    <div class="jPanel" :class="{jPanel_square: square, fullscreen: fullscreen}">
        <div class="jPanel_header" v-if="title || $slots.title || icon || $slots.header || $slots['header-action']">
            <div class="jPanel_title q-pa-md non-selectable" v-if="title || icon || $slots['title']">
                <QIcon v-if="icon" :name="icon" size="14px" class="jPanel_icon" :style="{ color: iconColor }" />
                <slot name="title">
                    <span>{{ title }}</span>
                </slot>
            </div>
            <div class="jPanel_headerSlot" v-if="$slots['header']">
                <slot name="header" />
            </div>
            <div class="jPanel_headerAction q-pa-md" v-if="$slots['header-action']">
                <slot name="header-action" />
            </div>
        </div>

        <div v-if="scroll" class="jPanel_scroll">
            <slot />
        </div>
        <div v-else>
            <slot />
        </div>

        <div class="jPanel_footer q-px-md q-py-xs" v-if="$slots.footer || footerText">
            <span class="jPanel_footerText" v-if="footerText">{{ footerText }}</span>
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
import { QIcon } from 'quasar';

export default {
    name: 'JPanel',
    components: { QIcon },
    props: {
        title: {
            type: String,
            default: null,
        },
        icon: {
            type: String,
            default: null,
        },
        iconColor: {
            type: String,
            default: 'var(--q-primary)',
        },
        footerText: {
            type: String,
            default: null,
        },
        square: {
            type: Boolean,
            default: false,
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
        scroll: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.jPanel {
    background: var(--q-panel-gradient);
    border: 1px solid var(--q-surface-border);
    border-radius: 4px;
    overflow: hidden;
    color: var(--q-text);
    display: flex;
    flex-direction: column;
}

.jPanel.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    overflow-y: auto;
}

.jPanel_square {
    border-radius: 0;
}

.jPanel_header {
    display: flex;
    justify-content: space-between;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid color-mix(in srgb, white 6%, transparent);
}

.jPanel_headerSlot {
    max-width: 100%;
}

.jPanel_title {
    font-family: var(--font-display);
    font-size: 11px;
    letter-spacing: 3px;
    color: var(--q-text);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

.jPanel_icon {
    flex-shrink: 0;
}

.jPanel_headerAction {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
}

.jPanel_scroll {
    overflow-y: auto;
    flex: 1;
    min-height: 0;
}

.jPanel_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid color-mix(in srgb, white 4%, transparent);
}

.jPanel_footerText {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--q-text-muted);
    letter-spacing: 1px;
}
</style>
