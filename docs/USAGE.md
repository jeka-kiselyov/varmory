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
