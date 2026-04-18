# varmory

Vue 3 + Quasar component showcase library with multi-theme support and an MCP server for AI agents.

Drop in an interactive component browser, expose your components to AI via the Model Context Protocol, and ship with built-in theming — dark/light mode, multiple themes, or bring your own.

## Installation

```bash
npm install varmory
```

Peer dependencies:

```bash
npm install vue@^3 quasar@^2 pinia@^3 @quasar/extras@^1
```

## Setup

Quasar components are registered by `@quasar/vite-plugin` in your Vite config:

```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default {
	plugins: [
		vue({ template: { transformAssetUrls } }),
		quasar({ autoImportComponentCase: 'pascal' }),
	],
};
```

In your app's entry file, install varmory as a Vue plugin alongside Pinia, import Quasar's base CSS and icons, and pass any Quasar plugins you need:

```js
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { install as Varmory } from 'varmory';
import { Dialog, Notify, LocalStorage, SessionStorage } from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import App from './App.vue';

createApp(App)
	.use(createPinia())
	.use(Varmory, {
		theme: 'space', // optional, default is 'default'
		plugins: { Notify, Dialog, LocalStorage, SessionStorage },
	})
	.mount('#app');
```

See [USAGE.md](docs/USAGE.md) for more setup options (including attaching Quasar yourself instead of via varmory).

## Docs

- [Usage](https://varmory-dec8b20a1b83.herokuapp.com/#docs/USAGE) — setting up a fresh app using varmory for UI, Vite config, and Quasar plugin setup
- [Building Components](https://varmory-dec8b20a1b83.herokuapp.com/#docs/CustomComponents) — API style, CSS variables, layout patterns, component composition, and styling conventions
- [Theming](https://varmory-dec8b20a1b83.herokuapp.com/#docs/THEMING) — built-in themes, custom themes, writing your own, theme store API, and UI components
- [Showcase](https://varmory-dec8b20a1b83.herokuapp.com/#docs/SHOWCASE) — interactive component browser, adding categories, custom docs, writing showcase entries, and navigation
- [MCP Server](https://varmory-dec8b20a1b83.herokuapp.com/#docs/MCP) — expose showcase data to AI agents via the Model Context Protocol
