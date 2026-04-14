<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Themed footer with the same visual language as <code>PortfolioHeader</code> — frame, corners, gradient highlight, and per-theme background effects. Not sticky by default.</p>
            <div class="jShowcase_infoSection">
                <span class="jShowcase_infoLabel">Layout</span>
                <p>Bottom bar with left (title/logo + caption), center, and right sections. Optional expanded area above with a gradient divider.</p>
            </div>
        </div>

        <!-- Full footer with expanded content -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Full (With Expanded Content)</span>
            <div class="jShowcase_column">
                <PortfolioFooter title="VAULT">
                    <template #expanded>
                        <div class="demoLinkColumn">
                            <span class="demoLinkHeading">Platform</span>
                            <a class="demoLink">Dashboard</a>
                            <a class="demoLink">Portfolio</a>
                            <a class="demoLink">Staking</a>
                            <a class="demoLink">Swap</a>
                        </div>
                        <div class="demoLinkColumn">
                            <span class="demoLinkHeading">Resources</span>
                            <a class="demoLink">Documentation</a>
                            <a class="demoLink">API Reference</a>
                            <a class="demoLink">Status Page</a>
                        </div>
                        <div class="demoLinkColumn">
                            <span class="demoLinkHeading">Community</span>
                            <a class="demoLink">Discord</a>
                            <a class="demoLink">Twitter</a>
                            <a class="demoLink">GitHub</a>
                        </div>
                    </template>
                    <template #caption>
                        &copy; 2026 Vault Protocol
                    </template>
                    <template #center>
                        <span class="demoPill">MAINNET</span>
                        <span class="demoPill">v2.4.1</span>
                    </template>
                    <template #right>
                        <QBtn flat round size="sm" icon="fab fa-discord" color="primary" />
                        <QBtn flat round size="sm" icon="fab fa-twitter" color="primary" />
                        <QBtn flat round size="sm" icon="fab fa-github" color="primary" />
                    </template>
                </PortfolioFooter>
            </div>
        </div>

        <!-- Simple bar -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Simple Bar</span>
            <div class="jShowcase_column">
                <PortfolioFooter title="Portfolio">
                    <template #caption>
                        &copy; 2026 All rights reserved
                    </template>
                    <template #right>
                        <span class="demoPill">BLOCK #184,291,037</span>
                    </template>
                </PortfolioFooter>
            </div>
        </div>

        <!-- Custom logo -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Logo Slot</span>
            <div class="jShowcase_column">
                <PortfolioFooter>
                    <template #logo>
                        <QIcon name="diamond" size="18px" color="secondary" />
                        <span style="letter-spacing: 2px; font-weight: 700;">VAULT</span>
                    </template>
                    <template #caption>
                        Decentralized Finance Protocol
                    </template>
                    <template #right>
                        <span class="demoPill active">
                            <span class="demoPulseDot"></span>
                            LIVE
                        </span>
                    </template>
                </PortfolioFooter>
            </div>
        </div>

        <!-- Minimal -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Minimal (Title Only)</span>
            <div class="jShowcase_column">
                <PortfolioFooter title="Dashboard" />
            </div>
        </div>
    </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar';
import PortfolioFooter from '../../../components/footers/PortfolioFooter.vue';
import PortfolioFooterApi from '../../definitions/Custom/PortfolioFooter.json';

export default {
    name: 'ShowcasePortfolioFooter',
    components: { QBtn, QIcon, PortfolioFooter },
    label: 'Portfolio Footer',
    icon: 'call_to_action',
    inject: ['showcaseCopy'],
    apiJson: PortfolioFooterApi,
    importName: 'PortfolioFooter',
    code: null,
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
</script>

<style scoped>
.demoLinkColumn {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 120px;
}

.demoLinkHeading {
    font-family: var(--font-display);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--q-primary);
    font-weight: 600;
    margin-bottom: 4px;
}

.demoLink {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--q-text-muted);
    cursor: pointer;
    transition: color 0.15s ease;
    text-decoration: none;
}

.demoLink:hover {
    color: var(--q-text-bright);
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
