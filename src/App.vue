<template>
	<div>
		
		<Header />

		<JComponentShowcaseWithContent :components="components" search-url="/search.vecito" />

		<Footer />
	</div>
</template>
  
<script>
import { JComponentShowcaseWithContent, JComponentShowcase } from './varmory';
import Header from './varmory/appComponents/Header.vue';
import Footer from './varmory/appComponents/Footer.vue';

import Test from './extra/Test.vue';

export default {
	components: {
		JComponentShowcaseWithContent,
		JComponentShowcase,
		Header,
		Footer,
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
		background:
			radial-gradient(ellipse 80% 60% at 0% 0%, color-mix(in srgb, var(--q-primary) 14%, transparent) 0%, transparent 70%),
			radial-gradient(ellipse 80% 60% at 100% 100%, color-mix(in srgb, var(--q-secondary) 14%, transparent) 0%, transparent 70%),
			linear-gradient(180deg,
				color-mix(in srgb, var(--q-primary) 4%, var(--q-surface-0, #fff)) 0%,
				color-mix(in srgb, var(--q-secondary) 6%, var(--q-surface-1, #f5f7fa)) 50%,
				color-mix(in srgb, var(--q-primary) 4%, var(--q-surface-0, #fff)) 100%);
		background-attachment: fixed;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: var(--q-text, #2c3e50);
		margin-top: 0px;


		font-family: 'Source Sans 3', 'Helvetica Neue', sans-serif;
	}

	.body--dark #app {
		background:
			radial-gradient(ellipse 80% 60% at 0% 0%, color-mix(in srgb, var(--q-primary) 22%, transparent) 0%, transparent 70%),
			radial-gradient(ellipse 80% 60% at 100% 100%, color-mix(in srgb, var(--q-secondary) 22%, transparent) 0%, transparent 70%),
			linear-gradient(180deg,
				color-mix(in srgb, var(--q-primary) 8%, var(--q-surface-0, #0e0e14)) 0%,
				color-mix(in srgb, var(--q-secondary) 10%, var(--q-surface-1, #14141c)) 50%,
				color-mix(in srgb, var(--q-primary) 8%, var(--q-surface-0, #0e0e14)) 100%);
		background-attachment: fixed;
		color: var(--q-text, #e6e6e6);
	}

	/* Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: color-mix(in srgb, var(--q-primary), transparent 50%) transparent;
	}

	/* Chrome / Safari / Edge */
	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background: color-mix(in srgb, var(--q-primary), transparent 50%);
		border-radius: 2px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: color-mix(in srgb, var(--q-primary), transparent 70%);
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}
</style>