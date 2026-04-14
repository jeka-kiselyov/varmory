<template>
    <div class="portfolioFooter" :class="{ compact: alwaysCollapsed, hasContent: ($slots['expanded'] || $slots['bottom']) && !alwaysCollapsed }">
        <div class="portfolioFooter_frame">
            <div class="portfolioFooter_expandable" v-if="$slots['expanded'] && !alwaysCollapsed">
                <div class="portfolioFooter_expandableInner">
                    <slot name="expanded" />
                </div>
            </div>

            <div class="portfolioFooter_divider" v-if="$slots['expanded'] && !alwaysCollapsed"></div>

            <div class="portfolioFooter_bar" :class="{ portfolioFooter_barCentered: !$slots['center'] && !$slots['right'] }">
                <div class="portfolioFooter_left">
                    <div class="portfolioFooter_tag" v-if="!$slots['logo'] && title">
                        <span class="portfolioFooter_tagDot"></span>
                        <span class="portfolioFooter_tagLabel">{{ title }}</span>
                    </div>
                    <div class="portfolioFooter_tag" v-if="$slots['logo']">
                        <slot name="logo" />
                    </div>
                    <div class="portfolioFooter_caption" v-if="$slots['caption']">
                        <slot name="caption" />
                    </div>
                </div>

                <div class="portfolioFooter_center" v-if="$slots['center']">
                    <slot name="center" />
                </div>

                <div class="portfolioFooter_right" v-if="$slots['right']">
                    <slot name="right" />
                </div>
            </div>

            <div class="portfolioFooter_bottom" v-if="$slots['bottom'] && !alwaysCollapsed">
                <div class="portfolioFooter_bottomDivider"></div>
                <div class="portfolioFooter_bottomInner">
                    <slot name="bottom" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioFooter',
    props: {
        title: {
            type: String,
            default: '',
        },
        alwaysCollapsed: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
/* ── Root wrapper ──────────────────────────────────────────── */

.portfolioFooter {
    padding: 0;
}

/* ── Frame — thin bar style by default ─────────────────────── */

.portfolioFooter_frame {
    position: relative;
    border-width: 0;
    border-top-width: 1px;
    border-style: solid;
    border-radius: 0;    
    padding: 8px 10px;
    overflow: hidden;
    backdrop-filter: blur(16px);

    background: var(--q-panel-compact-gradient);
    border-color: var(--q-surface-border);
    border-image: linear-gradient(90deg, transparent 10%, color-mix(in srgb, var(--q-primary) 50%, transparent) 30%, var(--q-primary) 50%, color-mix(in srgb, var(--q-primary) 50%, transparent) 70%, transparent 90%) 1;
}

.hasContent .portfolioFooter_frame {
    padding: 20px 28px;
}

/* ── Expanded slot — extra content above the bar ───────────── */

.portfolioFooter_expandable {
    margin-bottom: 16px;
}

.portfolioFooter_expandableInner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
}

/* ── Divider — separates expanded from bar ─────────────────── */

.portfolioFooter_divider {
    height: 1px;
    margin-bottom: 16px;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--q-primary) 25%, transparent) 20%, color-mix(in srgb, var(--q-primary) 25%, transparent) 80%, transparent);
}

/* ── Bottom bar — always-visible row: left | center | right ── */

.portfolioFooter_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

.portfolioFooter_barCentered {
    justify-content: center;
    padding: 8px 0;
}

.portfolioFooter_barCentered .portfolioFooter_left {
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

/* ── Left — tag + caption ──────────────────────────────────── */

.portfolioFooter_left {
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
}

/* ── Tag — title with dot indicator ────────────────────────── */

.portfolioFooter_tag {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-display);
    font-size: 11px;
    letter-spacing: 3px;
    font-weight: 600;
    color: var(--q-primary);
    text-transform: uppercase;
    user-select: none;
    text-wrap: nowrap;
}

.portfolioFooter_tagDot {
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--q-primary);
}

.portfolioFooter_tagLabel {
    line-height: 1;
}

/* ── Caption — muted text beside the tag ───────────────────── */

.portfolioFooter_caption {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--q-text-faint);
    letter-spacing: 0.5px;
    text-wrap: nowrap;
}

/* ── Center slot ───────────────────────────────────────────── */

.portfolioFooter_center {
    display: flex;
    align-items: center;
    gap: 16px;
}

/* ── Right slot ────────────────────────────────────────────── */

.portfolioFooter_right {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* ── Bottom slot — centered columns below the bar ──────────── */

.portfolioFooter_bottom {
    margin-top: 12px;
}

.portfolioFooter_bottomDivider {
    height: 1px;
    margin-bottom: 12px;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--q-primary) 25%, transparent) 20%, color-mix(in srgb, var(--q-primary) 25%, transparent) 80%, transparent);
}

.portfolioFooter_bottomInner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding: 0 16px 8px;
}

/* ── Mobile ────────────────────────────────────────────────── */

@media (max-width: 600px) {
    .portfolioFooter_frame { padding: 16px; }
    .portfolioFooter_bar { flex-wrap: wrap; gap: 10px; }
    .portfolioFooter_center { display: none; }
    .portfolioFooter_expandableInner { gap: 20px; }
}
</style>
