<template>
    <div class="column q-gutter-md showcaseTabs">
        <div class="jShowcase_info">
            <p><strong>QTabs</strong> organizes content into tab panels with flexible styling. This showcase demonstrates horizontal and vertical layouts, icon/text variations, responsive arrow navigation, and key layout behaviors like stretch/shrink alignment.</p>
            <p><strong>Layout flexibility:</strong> QTabs and QTabPanels don't have to be adjacent. They can be located in different parts of the page or laid out independently—useful when space is limited.</p>
            <p><strong>Independent usage:</strong> You don't have to pair QTabs with QTabPanels. Use QTabs as a tab selector and manage the model <code>v-model</code> yourself to control content display however you want.</p>
        </div>

        <!-- Tabs with icons -->
        <div class="column q-gutter-sm">
            <span class="jShowcase_title q-mb-xs">With Panels</span>
            <QTabs v-model="tab" dense no-caps active-color="accent" indicator-color="accent">
                <QTab name="overview" icon="dashboard" label="Overview" />
                <QTab name="systems" icon="memory" label="Systems" />
                <QTab name="crew" icon="groups" label="Crew" />
                <QTab name="logs" icon="description" label="Logs" alert="warning" />
            </QTabs>
            <QTabPanels v-model="tab" animated >
                <QTabPanel name="overview">Ship status nominal. All systems operational.</QTabPanel>
                <QTabPanel name="systems">Warp drive: online. Shields: 98%. Phasers: charged.</QTabPanel>
                <QTabPanel name="crew">Officers: 42. Enlisted: 388. Civilians: 0.</QTabPanel>
                <QTabPanel name="logs">3 new entries. 1 flagged for review.</QTabPanel>
            </QTabPanels>
        </div>

        <!-- Text-only tabs -->
        <div class="column q-gutter-sm">
            <span class="jShowcase_title q-mb-xs">Minimal</span>
            <QTabs v-model="tab2" dense no-caps active-color="primary" indicator-color="primary" narrow-indicator align="left">
                <QTab name="all" label="All" />
                <QTab name="active" label="Active" />
                <QTab name="archived" label="Archived" />
                <QTab name="disabled" label="Disabled" disable />
            </QTabs>
            <QTabPanels v-model="tab2" animated>
                <QTabPanel name="all" style="padding: 12px 8px;">Showing all 127 records.</QTabPanel>
                <QTabPanel name="active" style="padding: 12px 8px;">48 active records.</QTabPanel>
                <QTabPanel name="archived" style="padding: 12px 8px;">79 archived records.</QTabPanel>
            </QTabPanels>
        </div>

        <!-- Arrows (inside) -->
        <div class="column q-gutter-sm">
            <span class="jShowcase_title q-mb-xs">Arrows — inside</span>
            <div style="width: 280px;">
                <QTabs v-model="tab4" dense no-caps inline-label mobile-arrows active-color="primary" indicator-color="primary">
                    <QTab name="overview" icon="dashboard" label="Overview" />
                    <QTab name="systems" icon="memory" label="Systems" />
                    <QTab name="crew" icon="groups" label="Crew" />
                    <QTab name="logs" icon="description" label="Logs" />
                    <QTab name="shields" icon="security" label="Shields" />
                    <QTab name="comms" icon="podcasts" label="Comms" />
                </QTabs>
            </div>
        </div>

        <!-- Arrows (outside) -->
        <div class="column q-gutter-sm">
            <span class="jShowcase_title q-mb-xs">Arrows — outside</span>
            <div style="width: 280px;">
                <QTabs v-model="tab5" inline-label dense no-caps outside-arrows mobile-arrows active-color="accent" indicator-color="accent">
                    <QTab name="overview" icon="dashboard" label="Overview" />
                    <QTab name="systems" icon="memory" label="Systems" />
                    <QTab name="crew" icon="groups" label="Crew" />
                    <QTab name="logs" icon="description" label="Logs" />
                    <QTab name="shields" icon="security" label="Shields" />
                    <QTab name="comms" icon="podcasts" label="Comms" />
                </QTabs>
            </div>
        </div>


        <!-- Shrink -->
        <div class="column q-gutter-sm">
            <span class="jShowcase_title q-mb-xs">Stretch</span>

            <div class="jShowcase_info">
                <p><strong>stretch</strong> — when used on a flexbox parent, <code>QTabs</code> stretches to the parent's height. Useful for making the tab bar fill vertical space.</p>
                <p><strong>shrink</strong> — reverses the default behavior. Normally <code>QTabs</code> grows to fill the parent's available width; with <code>shrink</code> set, the bar hugs its tabs' natural width instead. Required when placing <code>QTabs</code> inside a <code>QToolbar</code>.</p>
                <p><strong>breakpoint</strong> (px, default <code>600</code>) — compared against the tabs-container's own width: if &lt; breakpoint, tabs fill all available space; if ≥ breakpoint, <code>QTabs</code> honors the <code>align</code> prop. When shrunk, the container width equals the tabs' natural width (typically smaller than breakpoint), so <code>align</code> is ignored.</p>
            </div>
            
            <div>
                <QTabs v-model="tab6" align="right" breakpoint="600" stretch dense no-caps inline-label active-color="primary" indicator-color="primary">
                    <QTab name="overview" icon="dashboard" label="Overview" />
                    <QTab name="systems" icon="memory" label="Systems" />
                    <QTab name="crew" icon="groups" label="Crew" />
                </QTabs>
            </div>
        </div>

        <!-- Vertical tabs -->
        <div class="column q-gutter-sm">
            <span class="jShowcase_title q-mb-xs">Vertical</span>
            <div class="row items-stretch" >
                <QTabs v-model="tab3" vertical no-caps  active-color="accent" indicator-color="accent">
                    <QTab name="overview" icon="dashboard" label="Overview" />
                    <QTab name="systems" icon="memory" label="Systems" />
                    <QTab name="crew" icon="groups" label="Crew" />
                    <QTab name="logs" icon="description" label="Logs" alert="warning" />
                </QTabs>
                <QTabPanels v-model="tab3" animated vertical class="col" >
                    <QTabPanel name="overview">Ship status nominal. All systems operational.</QTabPanel>
                    <QTabPanel name="systems">Warp drive: online. Shields: 98%. Phasers: charged.</QTabPanel>
                    <QTabPanel name="crew">Officers: 42. Enlisted: 388. Civilians: 0.</QTabPanel>
                    <QTabPanel name="logs">3 new entries. 1 flagged for review.</QTabPanel>
                </QTabPanels>
            </div>
        </div>
    </div>
</template>

<script>
import { QTabs, QTab, QTabPanels, QTabPanel } from 'quasar';
import QTabsApi from 'quasar/src/components/tabs/QTabs.json';
import QTabApi from 'quasar/src/components/tabs/QTab.json';
import QTabPanelsApi from 'quasar/src/components/tab-panels/QTabPanels.json';
import QTabPanelApi from 'quasar/src/components/tab-panels/QTabPanel.json';

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
            tab3: 'overview',
            tab4: 'overview',
            tab5: 'overview',
            tab6: 'overview',
        };
    },
};
</script>

