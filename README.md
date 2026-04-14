# varmory

Vue 3 + Quasar component library with a multi-theme system.

## Installation

```bash
npm install varmory
```

Peer dependencies:

```bash
npm install vue@^3 quasar@^2 pinia@^3 @quasar/extras@^1
```

## Setup

```js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { install as Varmory } from 'varmory';

const app = createApp(App);
app.use(createPinia());
app.use(Varmory, {
    theme: 'space', // optional. Default is 'default'
});
```

This registers all components globally and initializes the theme system.

## Theming, Dark/Light mode

See [docs/THEMING.md](docs/THEMING.md) — built-in themes, custom themes, writing your own, theme store API, and UI components.

## JComponentShowcase

See [docs/SHOWCASE.md](docs/SHOWCASE.md) — interactive component browser, adding categories, custom docs, writing showcase entries, and navigation.

## MCP Server

See [docs/MCP.md](docs/MCP.md) — expose showcase data to AI agents via the Model Context Protocol.
