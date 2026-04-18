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

On the App's main file, like `main.js` you need to initialize Varmory as a Vue plugin, additionally loading Quasar's base and icons css, and set Quasar plugins you may need in your application

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { install } from './varmory';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import { createPinia } from 'pinia';

import {
	Dialog, LocalStorage, SessionStorage, Notify,
} from 'quasar';

createApp(App).use(createPinia()).use(install, { theme: 'space', plugins: { Notify, Dialog, LocalStorage, SessionStorage } }).mount('#app');
```

Alternatively, you can attach Quasar plugin on the app side. Expected to work very same, as Quasar is deduped peerDependency of the Varmory:

```js
...
import { Quasar } from 'quasar';
createApp(App).use(createPinia()).use(Quasar, { plugins: { Notify } }).use(install, { theme: 'space' }).mount('#app');
```

Note that Quasar's css and icons css expected to be included on the App's side (as you may want to use different sets there).

When building the app and its components with varmory, follow the conventions in [CustomComponents.md](CustomComponents.md) — API style, CSS variables, class naming, and component structure.
