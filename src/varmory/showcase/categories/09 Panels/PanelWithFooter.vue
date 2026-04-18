<template>
    <div class="column q-gutter-sm">
        <JPanel
            title="DATA PANEL"
            icon="analytics"
            icon-color="var(--q-info)"
            footer-text="Last updated: just now"
            :accent="selectedAccent"
        >
            <div class="q-ma-md">Panel content area with default gradient background.</div>
            <template #footer>
                <QBtn class="ghost" icon="refresh" size="sm" label="Refresh" />
            </template>
        </JPanel>
        <div class="row items-center q-gutter-sm q-mt-lg">
            <span class="text-caption text-muted">Accent:</span>
            <QBtnToggle
                v-model="selectedAccent"
                :options="accentOptions"
                color="surface-2"
                toggle-color="primary"
                dense
                unelevated
            />
        </div>
    </div>
</template>

<script>
import { QBtn, QBtnToggle } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithFooter',
    components: { QBtn, QBtnToggle, JPanel },
    data: () => ({
        selectedAccent: false,
        accentOptions: [
            { label: 'false', value: false },
            { label: 'true', value: true },
            { label: 'header', value: 'header' },
        ],
    }),
    label: 'Panel With Footer',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: `<JPanel
  title="DATA PANEL"
  icon="analytics"
  icon-color="var(--q-info)"
  footer-text="Last updated: just now"
>
  <div>Panel content here.</div>

  <template #footer>
    <QBtn class="ghost"
          icon="refresh">
      Refresh
    </QBtn>
  </template>
</JPanel>`,
};
</script>
