# Usage

Varmory wraps [Quasar](https://quasar.dev/) (Vue 3). When you install varmory via `app.use()`, varmory's own components (`JPanel`, `PortfolioHeader`, etc.) are registered globally.

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

When building the app and its components with varmory, follow the conventions in [CustomComponents.md](CustomComponents.md) — API style, CSS variables, class naming, and component structure.
