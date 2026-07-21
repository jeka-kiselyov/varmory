# Usage

Varmory wraps [Quasar](https://quasar.dev/) (Vue 3). When you install varmory via `app.use()`, varmory's showcase components (`JComponentShowcase`, `JComponentShowcaseWithContent`) are registered globally.

Quasar components (`QBtn`, `QInput`, `QIcon`, etc.) are registered separately by `@quasar/vite-plugin` in your Vite config:

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

In your app's entry file (e.g. `main.js`), install **Quasar first** and **Varmory after**. Varmory's plugin only registers its two showcase components (`JComponentShowcase`, `JComponentShowcaseWithContent`) and throws if Quasar isn't already attached.

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { Quasar, Notify, Dialog, LocalStorage, SessionStorage } from 'quasar';
import { Varmory } from 'varmory';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

createApp(App)
	.use(Quasar, { plugins: { Notify, Dialog, LocalStorage, SessionStorage } })
	.use(Varmory)
	.mount('#app');
```

Quasar's base CSS and the icon pack CSS are expected to be imported on the app side (so you can swap icon packs per project). Any Quasar plugins (`Notify`, `Dialog`, etc.) are configured on the `Quasar` install call — varmory doesn't take any options of its own.

When building the app and its components with varmory, follow the conventions in [CustomComponents.md](CustomComponents.md) — API style, CSS variables, class naming, and component structure.

## Semantic Search (optional)

The showcase sidebar supports semantic search via [vecito](https://www.npmjs.com/package/vecito). Without it, search falls back to substring matching. With it, search uses hybrid dense embeddings + BM25 and handles natural-language queries much better.

```bash
npm install vecito
node node_modules/varmory/scripts/buildSearchIndex.js
```

This builds `src/public/search.vecito` (~150 KB) from your components and docs. Pass the index URL to the showcase component:

```html
<JComponentShowcaseWithContent search-url="/search.vecito" />
```

Rebuild the index whenever you add or change showcase components or docs. The same index is picked up automatically by the MCP server — see [MCP.md](MCP.md) for details.

## MCP Server

Varmory includes an MCP server that exposes your component catalog, API definitions, and docs to AI agents like Claude. Once set up, agents can search components, read templates, and look up props/slots/events without manually reading source files.

See [MCP.md](MCP.md) for setup and configuration.
