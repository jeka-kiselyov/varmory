<template>
	<div>
		
		<PortfolioHeader  class="q-pa-sm" title="vArmory" alwaysCollapsed>
			<template #collapsed>
				<span class="appHeaderThemeLabel">Theme:</span>
					<JThemeSwitcher  outlined dense  />
			</template>
			<template #right>
				<JDarkSwitcher />
				<QBtn @click="test" label="Test" />
			</template>
		</PortfolioHeader>

		<JComponentShowcaseWithContent :components="components" />

		<PortfolioFooter title="vArmory" class="q-pa-sm q-mt-xl">
			<template #expanded>
				<div class="footerColumn">
					<span class="footerColumnHeading">Code</span>
					<a class="footerLink" href="https://github.com/jeka-kiselyov/varmory">GitHub</a>
				</div>
				<div class="footerColumn">
					<span class="footerColumnHeading">Resources</span>
					<a class="footerLink" href="https://varmory-dec8b20a1b83.herokuapp.com/#docs/README">Documentation</a>
				</div>
			</template>
			<template #bottom>
				<div class="text-center">
					&copy; <JCurrentYear /> vArmory
				</div>
			</template>
		</PortfolioFooter>
	</div>
</template>
  
<script>
import { PortfolioHeader, PortfolioFooter } from './varmory';
import { JComponentShowcaseWithContent, JComponentShowcase } from './varmory';
import JCurrentYear from './varmory/components/helpers/JCurrentYear.vue';
import JDarkSwitcher from './varmory/components/helpers/JDarkSwitcher.vue';
import JThemeSwitcher from './varmory/components/helpers/JThemeSwitcher.vue';
import { QBtn, QList, QItem, QItemSection, QIcon, QMenu } from 'quasar';

import Test from './extra/Test.vue';

export default {
	components: {
		JComponentShowcaseWithContent,
		JComponentShowcase,
		PortfolioHeader,
		PortfolioFooter,
		JThemeSwitcher,
		QBtn,
		QList,
		QItem,
		QItemSection,
		QIcon,
		QMenu,
		JCurrentYear,
		JDarkSwitcher,
	},
	data() {
		return {
		};
	},
	computed: {
		components() {
			return {
				'91 Test Category': [Test],
			};
		},
	},
	mounted() {
	},
	methods: {
		test() {
			this.$q.notify('test');
		}
	}
};
</script>
<style>
	#app {
		background: linear-gradient(180deg, var(--q-surface-0) 0%, var(--q-surface-1) 40%, var(--q-surface-0) 100%);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 0px;
	}
	.footerLink {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--q-text-muted);
		text-decoration: none;
		letter-spacing: 0.5px;
		transition: color 0.15s ease;
	}
	.footerLink:hover {
		color: var(--q-text-bright);
	}
	.footerColumn {
		display: flex;
		flex-direction: column;
		gap: 6px;
		min-width: 120px;
	}
.appHeaderThemeLabel {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 1px;
		color: var(--q-text-muted);
	}
.jThemeSwitcher .q-field__control {
		min-height: 28px !important;
		height: 28px !important;
	}
.jThemeSwitcher .q-field__native {
		padding: 0 4px !important;
		min-height: 28px !important;
		font-size: 11px !important;
	}
.jThemeSwitcher .q-field__prepend {
		height: 28px !important;
		padding-right: 4px !important;
	}
.jThemeSwitcher .q-field__prepend .q-icon {
		font-size: 14px !important;
	}
.jThemeSwitcher .q-field__append {
		height: 28px !important;
		padding-left: 0 !important;
	}
.jThemeSwitcher .q-field__append .q-icon {
		font-size: 16px !important;
	}
.footerColumnHeading {
		font-family: var(--font-display);
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--q-primary);
		font-weight: 600;
		margin-bottom: 4px;
	}
</style>