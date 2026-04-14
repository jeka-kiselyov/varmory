<template>
    <transition-group name="showcaseToast" tag="div" class="showcaseToasts" :class="positionClass">
        <div v-for="t in toasts" :key="t.id" class="showcaseToast">
            <span class="showcaseToast_icon material-icons">{{ t.icon }}</span>
            <span class="showcaseToast_text">{{ t.message }}</span>
        </div>
    </transition-group>
</template>

<script>
let toastId = 0;

export default {
    name: 'ShowcaseToast',
    props: {
        position: {
            type: String,
            default: 'bottom',
            validator: v => ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top', 'bottom', 'left', 'right', 'center'].includes(v),
        },
    },
    computed: {
        positionClass() {
            return 'showcaseToasts_' + this.position;
        },
    },
    data() {
        return {
            toasts: [],
        };
    },
    methods: {
        notify(message, icon = 'info') {
            const id = ++toastId;
            this.toasts.push({ id, message, icon });
            setTimeout(() => {
                const idx = this.toasts.findIndex(t => t.id === id);
                if (idx >= 0) this.toasts.splice(idx, 1);
            }, 2500);
        },
    },
};
</script>

<style scoped>
.showcaseToasts {
    position: fixed;
    display: flex;
    gap: 8px;
    z-index: 9999;
    pointer-events: none;
}

/* ── Positions ── */
.showcaseToasts_bottom {
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column-reverse;
    align-items: center;
}

.showcaseToasts_top {
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    align-items: center;
}

.showcaseToasts_bottom-right {
    bottom: 24px;
    right: 24px;
    flex-direction: column-reverse;
    align-items: flex-end;
}

.showcaseToasts_bottom-left {
    bottom: 24px;
    left: 24px;
    flex-direction: column-reverse;
    align-items: flex-start;
}

.showcaseToasts_top-right {
    top: 24px;
    right: 24px;
    flex-direction: column;
    align-items: flex-end;
}

.showcaseToasts_top-left {
    top: 24px;
    left: 24px;
    flex-direction: column;
    align-items: flex-start;
}

.showcaseToasts_left {
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    flex-direction: column;
    align-items: flex-start;
}

.showcaseToasts_right {
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    flex-direction: column;
    align-items: flex-end;
}

.showcaseToasts_center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
}

/* ── Toast item ── */
.showcaseToast {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: var(--q-surface-2, #1a1a2e);
    border: 1px solid var(--q-surface-border, #333);
    border-radius: 4px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    pointer-events: auto;
}

.showcaseToast_icon {
    font-size: 16px;
    color: var(--q-info, #4fc3f7);
}

.showcaseToast_text {
    font-family: var(--font-mono, monospace);
    font-size: 12px;
    letter-spacing: 0.5px;
    color: var(--q-text, #ccc);
}

/* ── Transitions ── */
.showcaseToast-enter-active {
    transition: all 0.25s ease;
}

.showcaseToast-leave-active {
    transition: all 0.2s ease;
}

.showcaseToast-enter-from,
.showcaseToast-leave-to {
    opacity: 0;
}

.showcaseToast-enter-from {
    transform: translateY(12px);
}

.showcaseToast-leave-to {
    transform: scale(0.95);
}
</style>
