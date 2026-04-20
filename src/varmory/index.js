import JComponentShowcase from './showcase/JComponentShowcase.vue';
import JComponentShowcaseWithContent from './showcase/JComponentShowcaseWithContent.vue';

import extractTemplate from './includes/extractTemplate.js';
// This function allows for app.use() in Vue
const plugin = {
    install(app, options) {
        if (!app.config.globalProperties.$q) {
            throw new Error("Quasar must be attached to the Vue app before Varmory (.use())")
        }
        app.component('JComponentShowcase', JComponentShowcase);
        app.component('JComponentShowcaseWithContent', JComponentShowcaseWithContent);
    }
};


export {
    plugin as Varmory,
    JComponentShowcase,
    JComponentShowcaseWithContent,
    extractTemplate,
};

