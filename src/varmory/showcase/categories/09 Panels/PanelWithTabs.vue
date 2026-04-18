<template>
    <JPanel
        icon-color="var(--q-info)"
        footer-text="Last updated: now"
        :accent="selectedAccent"
    >
        <template #footer>
            <div class="row items-center q-gutter-md justify-end">
                <QCheckbox v-model="inlineLabel" label="Inline" color="primary" />
                <QSelect
                    v-model="selectedAccent"
                    :options="accentOptions"
                    label="Accent"
                    dense
                    outlined
                    emit-value
                    map-options
                    style="min-width: 140px;"
                />
            </div>
        </template>
        <template #header>
        <QTabs v-model="tab" dense no-caps 
            active-color="accent" indicator-color="accent" 
            :inline-label="inlineLabel"
            class="q-mt-sm">
            <QTab name="overview" icon="dashboard" label="Overview" />
            <QTab name="systems" icon="memory" label="Systems" />
            <QTab name="crew" icon="groups" label="Crew" />
            <QTab name="logs" icon="description" label="Logs" alert="warning" />
        </QTabs>
        </template>
        <QTabPanels v-model="tab" 
          animated 
          transition-prev="fade"
          transition-next="fade">
            <QTabPanel name="overview">
                <div class="text-h6">Overview</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
            <QTabPanel name="systems">
                <div class="text-h6">Systems</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
            <QTabPanel name="crew">
                <div class="text-h6">Crew</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
            <QTabPanel name="logs"> 
            <div class="text-h6">Logs</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
        </QTabPanels>
    </JPanel>
</template>

<script>
import { QCheckbox, QSelect, QTabs, QTab, QTabPanels, QTabPanel } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithTabs',
    order: 1,
    components: { JPanel, QCheckbox, QSelect, QTabs, QTab, QTabPanels, QTabPanel },
    data: () => ({
        tab: 'overview',
        inlineLabel: false,
        selectedAccent: false,
        accentOptions: [
            { label: 'false', value: false },
            { label: 'true', value: true },
            { label: 'header', value: 'header' },
        ],
    }),
    label: 'Panel with Tabs',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: null,
};
</script>
