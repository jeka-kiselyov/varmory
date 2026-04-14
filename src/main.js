import { createApp } from 'vue';
import App from './App.vue';
import { install } from './varmory';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).use(install, { theme: 'space' }).mount('#app');

