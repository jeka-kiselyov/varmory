import { createApp } from 'vue';
import App from './App.vue';
import { install } from './varmory';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';

import {
	Dialog, LocalStorage, SessionStorage, Notify,
} from 'quasar';

// createApp(App).use(createPinia()).use(install, { theme: 'space', plugins: { Notify } }).mount('#app');
createApp(App).use(createPinia()).use(Quasar, { plugins: { Notify } }).use(install, { theme: 'space', plugins: { Notify } }).mount('#app');

