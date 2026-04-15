import { Quasar } from 'quasar';

import JPanel from './components/JPanel.vue';
import JComponentShowcase from './showcase/JComponentShowcase.vue';
import JComponentShowcaseWithContent from './showcase/JComponentShowcaseWithContent.vue';

import PortfolioHeader from './components/headers/PortfolioHeader.vue';
import PortfolioFooter from './components/footers/PortfolioFooter.vue';
import JCurrentYear from './components/helpers/JCurrentYear.vue';
import JDarkSwitcher from './components/helpers/JDarkSwitcher.vue';
import JThemeSwitcher from './components/helpers/JThemeSwitcher.vue';

import extractTemplate from './includes/extractTemplate.js';

import 'quasar/dist/quasar.css';
import './styles/common.css';
import themes from './styles/themes/';
import { useThemeStore } from './stores/theme.js';

// This function allows for app.use() in Vue
const plugin = {
    install(app, options) {
        app.use(Quasar, options); // note, this doesn't register components
                                  // you have to use @quasar/vite-plugin in parent vite.config.js
        app.component('JPanel', JPanel);
        app.component('JComponentShowcase', JComponentShowcase);
        app.component('JComponentShowcaseWithContent', JComponentShowcaseWithContent);
        app.component('PortfolioHeader', PortfolioHeader);
        app.component('PortfolioFooter', PortfolioFooter);
        app.component('JCurrentYear', JCurrentYear);
        app.component('JDarkSwitcher', JDarkSwitcher);
        app.component('JThemeSwitcher', JThemeSwitcher);

        if (options?.themes !== null && options?.themes !== false) {
            const themeStore = useThemeStore();
            const themeOpt = options?.theme;
            const isInlineTheme = themeOpt && typeof themeOpt === 'object';

            const mergedThemes = isInlineTheme
                ? { default: themeOpt }
                : { ...themes, ...options?.themes };

            themeStore.initialize({
                theme: isInlineTheme ? 'default' : (themeOpt || 'default'),
                themes: mergedThemes,
            });
        }
    }
};


export {
    plugin as install,
    JPanel,
    JComponentShowcase,
    JComponentShowcaseWithContent,
    PortfolioHeader,
    PortfolioFooter,
    JCurrentYear,
    JDarkSwitcher,
    JThemeSwitcher,
    extractTemplate,
    useThemeStore,
};

