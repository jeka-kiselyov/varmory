# Theming

The library ships with four built-in themes: `default`, `rpg`, `space`, and `finance`.

Each theme is a set of three CSS files:

| File | Purpose |
|------|---------|
| `common.css` | Common component-specific styling (backgrounds, borders, decorative effects), fonts imports, etc |
| `dark.css` | Optional CSS for dark mode |
| `light.css` | Optional CSS for light mode |

## Disabling theming

To use the library without the theme system (no theme store initialization, no CSS loading), pass `themes: null` or `themes: false`:

```js
app.use(install, { themes: null });
```

Components will still render — you can style them yourself by targeting their CSS class names (e.g. `.jPanel`, `.jPanel_header`, `.portfolioHeader_frame`) and defining the CSS variables they reference (`--q-primary`, `--q-surface-border`, `--font-display`, etc.) in your own stylesheets.

Dark/light mode toggling via `themeStore.toggleDark()` and `JDarkSwitcher` still works — Quasar adds the `.body--dark` class to `<body>`. You can use this to define your own dark/light styles:

```css
:root {
    --q-surface-border: #ddd;
}

.body--dark {
    --q-surface-border: #1a3a6a;
}

.body--dark .jPanel_header {
    border-bottom-color: rgba(255, 255, 255, 0.06);
}
```

## Selecting a built-in theme

```js
app.use(install, { theme: 'rpg' });
```

## Custom themes

A theme is an object with async CSS loaders: `{ common, dark, light }`.

To use a single custom theme, pass it directly to `theme`:

```js
app.use(install, {
    theme: {
        common: () => import('./themes/brand/common.css?inline'),
        dark:   () => import('./themes/brand/dark.css?inline'),
        light:  () => import('./themes/brand/light.css?inline'),
    },
});
```

To add custom themes alongside the built-in ones, use `themes`:

```js
app.use(install, {
    theme: 'myBrand',
    themes: {
        myBrand: {
            common: () => import('./themes/myBrand/common.css?inline'),
            dark:   () => import('./themes/myBrand/dark.css?inline'),
            light:  () => import('./themes/myBrand/light.css?inline'),
        },
    },
});
```

These are merged with built-in themes.

## Writing a theme

Each theme is a folder with three files: `common.css` (common css for theme, vars, fonts + component styling), `dark.css` and `light.css` (CSS variables for each mode). Use the built-in themes as a reference:

- [space](../src/varmory/styles/themes/space/) — sci-fi with scanlines and glow effects
- [rpg](../src/varmory/styles/themes/rpg/) — medieval fantasy
- [default](../src/varmory/styles/themes/default/) — clean modern
- [finance](../src/varmory/styles/themes/finance/) — corporate

Copy any of these as a starting point and adjust the values.

When implementing `common.css`, see [AccentBackground.md](./AccentBackground.md) for the `varmoryBackgroundAccent` contract — it's the shared hook themes use to paint signature backgrounds on JPanel's `accent` variant and on components like `PortfolioHeader`.

## Theme store

You can control theming programmatically via the Pinia store:

```js
import { useThemeStore } from 'varmory';

const themeStore = useThemeStore();

themeStore.currentTheme   // 'space' | 'rpg' | ...
themeStore.isDark          // boolean
themeStore.themeLocked     // true when only one theme is available
themeStore.ready           // true when CSS + fonts are loaded

themeStore.toggleDark()
themeStore.applyTheme('rpg', true) // (themeName, isDark)
```

## Optional UI components

The library includes ready-made components for theme control, but they are entirely optional. You can build your own UI using the theme store directly.

**JThemeSwitcher** — theme selector + dark/light toggle. Automatically hides the theme selector when only one theme is available.

```html
<JThemeSwitcher />
```

**JDarkSwitcher** — single round button, toggles dark/light. Accepts all `QBtn` props.

```html
<JDarkSwitcher />
<JDarkSwitcher size="lg" outline />
```
