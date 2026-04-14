<template>
    <div class="jShowcase_row jShowcase_column showcaseTabs">
        <!-- Tabs with icons -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">With Panels</span>
            <QTabs v-model="tab" dense no-caps class="showcaseTabs_bar" active-color="accent" indicator-color="accent">
                <QTab name="overview" icon="dashboard" label="Overview" />
                <QTab name="systems" icon="memory" label="Systems" />
                <QTab name="crew" icon="groups" label="Crew" />
                <QTab name="logs" icon="description" label="Logs" alert="warning" />
            </QTabs>
            <QTabPanels v-model="tab" animated class="showcaseTabs_panels">
                <QTabPanel name="overview">Ship status nominal. All systems operational.</QTabPanel>
                <QTabPanel name="systems">Warp drive: online. Shields: 98%. Phasers: charged.</QTabPanel>
                <QTabPanel name="crew">Officers: 42. Enlisted: 388. Civilians: 0.</QTabPanel>
                <QTabPanel name="logs">3 new entries. 1 flagged for review.</QTabPanel>
            </QTabPanels>
        </div>

        <!-- Text-only tabs -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Minimal</span>
            <QTabs v-model="tab2" dense no-caps class="showcaseTabs_bar" active-color="primary" indicator-color="primary" narrow-indicator align="left">
                <QTab name="all" label="All" />
                <QTab name="active" label="Active" />
                <QTab name="archived" label="Archived" />
                <QTab name="disabled" label="Disabled" disable />
            </QTabs>
            <QTabPanels v-model="tab2" animated class="showcaseTabs_panels">
                <QTabPanel name="all">Showing all 127 records.</QTabPanel>
                <QTabPanel name="active">48 active records.</QTabPanel>
                <QTabPanel name="archived">79 archived records.</QTabPanel>
            </QTabPanels>
        </div>
    </div>
</template>

<script>
import { QTabs, QTab, QTabPanels, QTabPanel } from 'quasar';
import QTabsApi from '../../definitions/Quasar/QTabs.json';
import QTabApi from '../../definitions/Quasar/QTab.json';
import QTabPanelsApi from '../../definitions/Quasar/QTabPanels.json';
import QTabPanelApi from '../../definitions/Quasar/QTabPanel.json';

export default {
    name: 'ShowcaseQuasarTabs',
    components: { QTabs, QTab, QTabPanels, QTabPanel },
    label: 'Quasar Tabs',
    icon: 'auto_awesome',
    apiJson: [
        { name: 'QTabs', json: QTabsApi },
        { name: 'QTab', json: QTabApi },
        { name: 'QTabPanels', json: QTabPanelsApi },
        { name: 'QTabPanel', json: QTabPanelApi },
    ],
    importName: 'QTabs',
    importFrom: 'quasar',
    data() {
        return {
            tab: 'overview',
            tab2: 'all',
        };
    },
};
</script>

<style scoped>
.showcaseTabs :deep(.jShowcase_group) {
    gap: 0;
}

.showcaseTabs :deep(.jShowcase_title) {
    margin-bottom: 8px;
}

.showcaseTabs_bar {
    border-bottom: 1px solid var(--q-surface-border);
}

.showcaseTabs_panels {
    background: transparent;
    color: var(--q-text);
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 0.5px;
    padding: 0;
}

.showcaseTabs_panels :deep(.q-tab-panel) {
    padding: 12px 8px;
}
</style>
