<template>
	<JPanel title="SAMPLE PANEL" 
		icon="dashboard" icon-color="var(--q-primary)">
		<div class="q-ma-md">
			Panel content area with default gradient background.
		</div>
	</JPanel>
</template>

<script>
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcaseBasicPanel',
    components: { JPanel },
    label: 'Basic Panel',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: null,
};
</script>
