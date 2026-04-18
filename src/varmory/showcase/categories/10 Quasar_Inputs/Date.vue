<template>
	<div class="jShowcase_row jShowcase_column">
		<div class="jShowcase_group">
			<span class="jShowcase_title">Basic</span>
			<div class="jShowcase_items">
				<QDate v-model="basic" color="primary" />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Landscape + Today button</span>
			<div class="jShowcase_items">
				<QDate v-model="landscape" color="secondary" landscape today-btn />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Multiple selection</span>
			<div class="jShowcase_items">
				<QDate v-model="multi" color="accent" multiple />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Range selection</span>
			<div class="jShowcase_items">
				<QDate v-model="rangeVal" color="positive" range />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Minimal (no header)</span>
			<div class="jShowcase_items">
				<QDate v-model="minimal" color="info" minimal />
			</div>
		</div>
	</div>
</template>

<script>
import { QDate } from 'quasar';
import QDateApi from '../../definitions/Quasar/QDate.json';

export default {
	name: 'ShowcaseQuasarDate',
	components: { QDate },
	label: 'Quasar Date',
	icon: 'calendar_today',
	apiJson: QDateApi,
	importName: 'QDate',
	importFrom: 'quasar',
	data() {
		return {
			basic: '2026/04/16',
			landscape: '2026/04/16',
			multi: ['2026/04/10', '2026/04/15', '2026/04/20'],
			rangeVal: { from: '2026/04/10', to: '2026/04/18' },
			minimal: '2026/04/16',
		};
	},
};
</script>
