<template>
    <JPanel
        title="DATA PANEL"
        icon="analytics"
        icon-color="var(--q-info)"
        footer-text="Last updated: just now"
    >
        <div class="q-ma-md">Panel content area with default gradient background.</div>
        <template #footer>
            <QBtn class="ghost" icon="refresh" size="sm" label="Refresh" />
        </template>
    </JPanel>
</template>

<script>
import { QBtn } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithFooter',
    components: { QBtn, JPanel },
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
