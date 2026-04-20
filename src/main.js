import { createApp } from 'vue';
import App from './App.vue';
import { Varmory } from './varmory';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import './app.css';
import { Quasar, Notify } from 'quasar';

createApp(App)
	.use(Quasar, { plugins: { Notify } })
	.use(Varmory)
	.mount('#app');
