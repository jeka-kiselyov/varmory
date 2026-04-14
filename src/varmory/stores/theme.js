import { defineStore } from 'pinia';
import { LocalStorage, Dark } from 'quasar';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        currentTheme: null,
        themes: null,
        isDark: false,
        ready: false,
    }),
    getters: {
        themeLocked: (state) => !state.themes || Object.keys(state.themes).length <= 1,
    },
    actions: {
        toggleDark() {
            this.isDark = !this.isDark;
            LocalStorage.set('isDark', this.isDark);
            Dark.set(this.isDark);

            if (this.themes !== null || this.currentTheme !== null) {
                this.applyTheme(this.currentTheme, this.isDark);
            }
        },
        async _loadStyleTag(themeName, variant) {
            const selector = `${themeName}-${variant}`;
            const existing = document.body.querySelector(`style[data-theme="${selector}"]`);
            if (existing) return existing;

            const themeData = this.themes[themeName]?.[variant];
            if (!themeData) return null;
            const style = document.createElement('style');
            style.setAttribute('data-theme', selector);
            style.textContent = await themeData();
            return style;
        },
        async applyTheme(themeName, isDark) {
            if (!this.themes[themeName]) {
                return;
            }

            const changingTheme = this._loadedTheme && this._loadedTheme !== themeName;

            if (changingTheme) {
                this.ready = false;
            }

            // If switching themes entirely, remove old style tags
            if (changingTheme && this._styles) {
                for (const el of Object.values(this._styles)) {
                    el.remove();
                }
                this._styles = null;
            }

            if (!this._styles) {
                // First load: create common + both variants in parallel
                const [commonEl, darkEl, lightEl] = await Promise.all([
                    this._loadStyleTag(themeName, 'common'),
                    this._loadStyleTag(themeName, 'dark'),
                    this._loadStyleTag(themeName, 'light'),
                ]);
                this._styles = {};
                if (commonEl) this._styles.common = commonEl;
                if (darkEl) this._styles.dark = darkEl;
                if (lightEl) this._styles.light = lightEl;

                // Common first, then inactive variant, then active (cascade wins)
                const inactive = isDark ? 'light' : 'dark';
                const active = isDark ? 'dark' : 'light';
                if (this._styles.common) document.body.appendChild(this._styles.common);
                if (this._styles[inactive]) document.body.appendChild(this._styles[inactive]);
                if (this._styles[active]) document.body.appendChild(this._styles[active]);
            } else {
                // Toggle: move the active variant after the inactive one
                const active = isDark ? 'dark' : 'light';
                if (this._styles[active]) {
                    document.body.appendChild(this._styles[active]);
                }
            }

            this._loadedTheme = themeName;
            LocalStorage.set('theme', themeName);

            await document.fonts.ready;
            this.ready = true;
        },
        async initialize({ theme, themes }) {
            this.themes = themes;

            // Restore theme from localStorage, fall back to provided default
            const storedTheme = LocalStorage.getItem('theme');
            this.currentTheme = (storedTheme && themes[storedTheme]) ? storedTheme : theme;

            // Restore dark mode from localStorage, fall back to Quasar state
            const storedDark = LocalStorage.getItem('isDark');
            if (storedDark !== null) {
                this.isDark = storedDark;
                Dark.set(this.isDark);
            } else if (Dark) {
                this.isDark = Dark.isActive;
            }

            if (this.themes[this.currentTheme]) {
                await this.applyTheme(this.currentTheme, this.isDark);
            }
        }
    },
});