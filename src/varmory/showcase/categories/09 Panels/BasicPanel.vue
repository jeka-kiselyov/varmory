<template>
	<JPanel
		title="SAMPLE PANEL"
		icon="dashboard"
		icon-color="var(--q-primary)"
		:accent="selectedAccent">
		<div class="q-ma-md row items-center q-gutter-sm">
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
	</JPanel>
</template>

<script>
import { QBtnToggle } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
	name: 'ShowcaseBasicPanel',
	components: { JPanel, QBtnToggle },
	data: () => ({
		selectedAccent: true,
		accentOptions: [
			{ label: 'false', value: false },
			{ label: 'true', value: true },
			{ label: 'header', value: 'header' },
		],
	}),
	label: 'Basic Panel',
	icon: 'dashboard',
	apiJson: JPanelApi,
	importName: 'JPanel',
	code: null,
};
</script>
