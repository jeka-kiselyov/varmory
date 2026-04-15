# varmory

Vue 3 + Quasar component showcase library with multi-theme support and an MCP server for AI agents.

Drop in an interactive component browser, expose your components to AI via the Model Context Protocol, and ship with built-in theming — dark/light mode, multiple themes, or bring your own.

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

## Docs

- [Usage](docs/USAGE.md) — setting up a fresh app using varmory for UI, Vite config, and Quasar plugin setup
- [Building Components](docs/CustomComponents.md) — API style, CSS variables, layout patterns, component composition, and styling conventions
- [Theming](docs/THEMING.md) — built-in themes, custom themes, writing your own, theme store API, and UI components
- [Showcase](docs/SHOWCASE.md) — interactive component browser, adding categories, custom docs, writing showcase entries, and navigation
- [MCP Server](docs/MCP.md) — expose showcase data to AI agents via the Model Context Protocol
