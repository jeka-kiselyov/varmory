# varmory

Component showcase for Vue 3 + Quasar apps, with a Model Context Protocol server so AI agents can read your components and docs.

Drop in an interactive browser for the Quasar components you use and any custom ones you build, and expose the same metadata to tools like Claude via MCP — no extra glue needed.

- [Component Showcase](https://varmory-dec8b20a1b83.herokuapp.com/)
- [MCP Server](https://varmory-dec8b20a1b83.herokuapp.com/#docs/MCP)

> See [**themed_varmory**](https://github.com/jeka-kiselyov/themed_varmory) for a reference example of using varmory as a base to build your own themed component library — swappable themes, a theme store, custom components, and an MCP server with an extended set of components and API definitions.

## Installation

```bash
npm install varmory
```

Peer dependencies:

```bash
npm install vue@^3 quasar@^2 @quasar/extras@^2
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

In your app's entry file, attach Quasar to the Vue app **before** Varmory, then install Varmory as a Vue plugin. Varmory registers `JComponentShowcase` + `JComponentShowcaseWithContent` globally and throws if Quasar isn't already installed.

```js
// main.js
import { createApp } from 'vue';
import { Quasar, Notify, Dialog, LocalStorage, SessionStorage } from 'quasar';
import { Varmory } from 'varmory';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import App from './App.vue';

createApp(App)
	.use(Quasar, { plugins: { Notify, Dialog, LocalStorage, SessionStorage } })
	.use(Varmory)
	.mount('#app');
```

See [USAGE.md](https://varmory-dec8b20a1b83.herokuapp.com/#docs/USAGE) for the rest of the setup details.

## Semantic Search (optional)

The showcase sidebar and MCP server support semantic search via [vecito](https://www.npmjs.com/package/vecito). It's an optional dependency — when installed, search uses hybrid dense embeddings + BM25; otherwise it falls back to substring matching.

```bash
npm install vecito
node node_modules/varmory/scripts/buildSearchIndex.js
```

Then pass the built index to the showcase:

```html
<JComponentShowcaseWithContent search-url="/search.vecito" />
```

See [MCP docs](https://varmory-dec8b20a1b83.herokuapp.com/#docs/MCP) for MCP server configuration and more options.

## Docs

- [Usage](https://varmory-dec8b20a1b83.herokuapp.com/#docs/USAGE) — setting up a fresh app, Vite config, Quasar plugin wiring
- [Building Components](https://varmory-dec8b20a1b83.herokuapp.com/#docs/CustomComponents) — API style, layout patterns, component composition
- [Showcase](https://varmory-dec8b20a1b83.herokuapp.com/#docs/SHOWCASE) — interactive browser, adding categories, custom docs, navigation
- [MCP Server](https://varmory-dec8b20a1b83.herokuapp.com/#docs/MCP) — expose showcase + docs + component APIs to AI agents via MCP
