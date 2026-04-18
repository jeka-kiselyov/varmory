<template>
    <div class="portfolioHeader varmoryBackgroundAccent" :class="{ 
        compact: (!alwaysExpanded && (alwaysCollapsed || scrolled)),
        varmoryBackgroundAccentCompact: (!alwaysExpanded && (alwaysCollapsed || scrolled))
     }">
        <div class="portfolioHeader_frame varmoryBackgroundAccentContainer">
            <div class="portfolioHeader_corner portfolioHeader_cornerTl"></div>
            <div class="portfolioHeader_corner portfolioHeader_cornerTr"></div>
            <div class="portfolioHeader_corner portfolioHeader_cornerBl"></div>
            <div class="portfolioHeader_corner portfolioHeader_cornerBr"></div>

            <div class="portfolioHeader_topBar">
                <div class="portfolioHeader_tag" v-if="!$slots['logo'] && title">
                    <span class="portfolioHeader_tagDot"></span>
                    <span class="portfolioHeader_tagLabel">{{ title }}</span>
                </div>
                <div class="portfolioHeader_tag" v-if="$slots['logo']">
                    <slot name="logo" />
                </div>

                <div class="portfolioHeader_collapsed" v-if="$slots['collapsed']">
                    <slot name="collapsed" />
                </div>

                <div class="portfolioHeader_right" v-if="$slots['right']">
                    <slot name="right" />
                </div>

                <div class="portfolioHeader_menu" v-if="$slots['menu']">
                    <QBtn color="secondary" icon="more_vert" round flat>
                        <QMenu>
                            <slot name="menu" />
                        </QMenu>
                    </QBtn>
                </div>
            </div>

            <div class="portfolioHeader_collapsible" v-if="$slots['expanded']">
                <div class="portfolioHeader_collapsibleInner">
                    <slot name="expanded" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { QBtn, QMenu } from 'quasar';

export default {
    name: 'PortfolioHeader',
    components: { QBtn, QMenu },
    props: {
        alwaysCollapsed: {
            type: Boolean,
            default: false,
        },
        alwaysExpanded: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Portfolio Overview',
        },
    },
    data() {
        return {
            scrolled: false,
            scrollThresholdExpand: 120,
            scrollThresholdCollapse: 0,
        };
    },
    computed: {},
    mounted() {
        if (this.alwaysCollapsed || this.alwaysExpanded) return;
        let timeoutId = null;
        let locked = false;
        this._onScroll = () => {
            if (locked) return;
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                timeoutId = null;
                if (this.scrolled) {
                    // Only expand back if user scrolled all the way to top
                    if (window.scrollY <= this.scrollThresholdCollapse) {
                        this.scrolled = false;
                    }
                } else if (window.scrollY > this.scrollThresholdExpand) {
                    // Collapse: lock briefly so the layout shift doesn't retrigger
                    this.scrolled = true;
                    locked = true;
                    setTimeout(() => { locked = false; }, 400);
                }
            }, 50);
        };
        window.addEventListener('scroll', this._onScroll, { passive: true });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this._onScroll);
    },
};
</script>

<style scoped>
/* ── Root — sticky wrapper ──────────────────────────────── */

.portfolioHeader {
    position: sticky;
    top: 0;
    z-index: 100;
    transition: padding 0.3s ease;
}

.portfolioHeader.compact {
    padding: 0;
}

/* ── Frame — bordered card, colors set by theme ─────────── */

.portfolioHeader_frame {
    position: relative;
    padding: 24px 28px;
    overflow: hidden;
    transition: padding 0.3s ease, border-radius 0.3s ease;
}

.compact .portfolioHeader_frame {
    padding: 8px 10px;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
    backdrop-filter: blur(16px);
	border-image: none;
}


/* ── Corners — decorative L-shaped border accents ───────── */

.portfolioHeader_corner {
    position: absolute;
    width: 12px;
    height: 12px;
    opacity: 0.5;
    transition: opacity 0.3s ease;

	border-color: var(--q-primary);
}

.portfolioHeader_cornerTl { top: 0; left: 0; border-top-width: 2px; border-top-style: solid; border-left-width: 2px; border-left-style: solid; }
.portfolioHeader_cornerTr { top: 0; right: 0; border-top-width: 2px; border-top-style: solid; border-right-width: 2px; border-right-style: solid; }
.portfolioHeader_cornerBl { bottom: 0; left: 0; border-bottom-width: 2px; border-bottom-style: solid; border-left-width: 2px; border-left-style: solid; }
.portfolioHeader_cornerBr { bottom: 0; right: 0; border-bottom-width: 2px; border-bottom-style: solid; border-right-width: 2px; border-right-style: solid; }

.compact .portfolioHeader_corner {
    opacity: 0;
}

/* ── Top bar — always-visible row: logo | collapsed | right */

.portfolioHeader_topBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    transition: margin 0.3s ease;
}

.compact .portfolioHeader_topBar {
    margin-bottom: 0;
}

/* ── Tag — title with dot indicator ─────────────────────── */

.portfolioHeader_tag {
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

.portfolioHeader_tagDot {
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--q-primary);
}

.portfolioHeader_tagLabel {
    line-height: 1;
}

/* ── Collapsed slot — hidden by default, shown in compact ─ */

.portfolioHeader_collapsed {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0;
    max-width: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-width 0.3s ease;
    pointer-events: none;
}

.compact .portfolioHeader_collapsed {
    opacity: 1;
    max-width: 300px;
    pointer-events: auto;
}

/* ── Right slot — status indicators ─────────────────────── */

.portfolioHeader_right {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* ── Expanded slot — collapses to 0fr on scroll ─────────── */

.portfolioHeader_collapsible {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows 0.3s ease;
}

.compact .portfolioHeader_collapsible {
    grid-template-rows: 0fr;
}

.portfolioHeader_collapsibleInner {
    overflow: hidden;
    padding-bottom: 8px;
    transition: padding 0.3s ease;
}

.compact .portfolioHeader_collapsibleInner {
    padding-bottom: 0px;
    padding-left: 0px;
}

/* ── Mobile ─────────────────────────────────────────────── */
.portfolioHeader_menu {
    display: none;
}

@media (max-width: 600px) {
    .portfolioHeader.compact { padding: 0; }
    .portfolioHeader_frame { padding: 8px 8px 8px 16px; }
    .compact .portfolioHeader_frame { padding: 6px 12px; }
    .portfolioHeader_right { display: none; }
    .portfolioHeader_menu { display: flex; }
    .portfolioHeader_collapsed { display: none; }
}
</style>
