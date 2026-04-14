<template>
    <JPanel
        title="CONTROLS"
        icon="tune"
        icon-color="var(--q-warning)"
    >
        <template #header-action>
            <QBtn class="ghost" icon="favorite_border" label="Act" size="xs" />
        </template>
		<div class="q-ma-md">Panel content area with default gradient background.</div>
    </JPanel>
</template>

<script>
import { QBtn } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithAction',
    components: { QBtn, JPanel },
    label: 'Panel With Header Action',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: null,
};
</script>
