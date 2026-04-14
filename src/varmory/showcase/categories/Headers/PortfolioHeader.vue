<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Sticky collapsible header that transitions between expanded and compact states on scroll. Colors and background patterns are set per-theme in <code>common.css</code>.</p>
            <div class="jShowcase_infoSection">
                <span class="jShowcase_infoLabel">Scroll behavior</span>
                <p>Collapses after scrolling past 120px. Expands back only when scrolled to top. A 400ms lock prevents layout-shift retriggering.</p>
            </div>
        </div>

        <!-- Default expanded -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Default (Expanded)</span>
            <div class="jShowcase_column">
                <PortfolioHeader title="Portfolio Overview" always-expanded>
                    <template #collapsed>
                        <AmountDisplay :amount="47832.61" currency="USD" :size="16" />
                        <AmountChange :percent="3.42" compact />
                    </template>
                    <template #expanded>
                        <div class="demoExpanded">
                            <div class="demoBalance">
                                <div class="demoBalanceLabel">TOTAL PORTFOLIO VALUE</div>
                                <AmountDisplay :amount="47832.61" currency="USD" :size="48" />
                                <AmountChange :percent="3.42" amount="+$1,582.14" period="24h" />
                            </div>
                            <div class="demoActions">
                                <QBtn color="primary" icon="north_east" label="Send" />
                                <QBtn color="secondary" icon="south_west" label="Receive" />
                                <QBtn color="accent" icon="swap_horiz" label="Swap" />
                                <QBtn class="ghost" icon="lock" label="Stake" />
                            </div>
                        </div>
                    </template>
                    <template #right>
                        <span class="demoPill">BLOCK #184,291,037</span>
                    </template>
                </PortfolioHeader>
            </div>
        </div>

        <!-- Always collapsed -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Always Collapsed</span>
            <div class="jShowcase_column">
                <PortfolioHeader title="Portfolio Overview" always-collapsed>
                    <template #collapsed>
                        <AmountDisplay :amount="47832.61" currency="USD" :size="16" />
                        <AmountChange :percent="3.42" compact />
                    </template>
                    <template #right>
                        <span class="demoPill">BLOCK #184,291,037</span>
                    </template>
                </PortfolioHeader>
            </div>
        </div>

        <!-- Custom logo slot -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Logo Slot</span>
            <div class="jShowcase_column">
                <PortfolioHeader always-collapsed>
                    <template #logo>
                        <QIcon name="diamond" size="18px" color="secondary" />
                        <span style="letter-spacing: 2px; font-weight: 700;">VAULT</span>
                    </template>
                    <template #collapsed>
                        <AmountDisplay :amount="12500.00" currency="BTC" :size="16" />
                    </template>
                    <template #right>
                        <span class="demoPill active">
                            <span class="demoPulseDot"></span>
                            LIVE
                        </span>
                    </template>
                </PortfolioHeader>
            </div>
        </div>

        <!-- Minimal -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Minimal (Title Only)</span>
            <div class="jShowcase_column">
                <PortfolioHeader title="Dashboard" always-collapsed />
            </div>
        </div>
    </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar';
import PortfolioHeader from '../../../components/headers/PortfolioHeader.vue';
import AmountDisplay from '../../../components/amounts/AmountDisplay.vue';
import AmountChange from '../../../components/amounts/AmountChange.vue';
import PortfolioHeaderApi from '../../definitions/Custom/PortfolioHeader.json';

export default {
    name: 'ShowcasePortfolioHeader',
    components: { QBtn, QIcon, PortfolioHeader, AmountDisplay, AmountChange },
    label: 'Portfolio Header',
    icon: 'web_asset',
    inject: ['showcaseCopy'],
    apiJson: PortfolioHeaderApi,
    importName: 'PortfolioHeader',
    code: null,
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
</script>

<style scoped>
.demoExpanded {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.demoBalance {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.demoBalanceLabel {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--q-text-muted);
}

.demoActions {
    display: flex;
    gap: 10px;
}

.demoPill {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--q-text-muted);
    border: 1px solid color-mix(in srgb, var(--q-primary) 15%, transparent);
    background: color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    padding: 3px 10px;
    border-radius: 2px;
}

.demoPill.active {
    color: var(--q-primary);
    border-color: var(--q-primary);
    background: color-mix(in srgb, var(--q-primary) 10%, transparent);
    display: flex;
    align-items: center;
    gap: 6px;
}

.demoPulseDot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--q-primary);
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 4px var(--q-primary); }
    50% { opacity: 0.5; box-shadow: none; }
}
</style>
