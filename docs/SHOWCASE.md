# JComponentShowcase

Interactive documentation browser for your components. Includes a nav sidebar, live preview, and code/API reference panel. A live demo is available at [varmory-dec8b20a1b83.herokuapp.com](https://varmory-dec8b20a1b83.herokuapp.com/).

There are two variants:

- **`JComponentShowcase`** — bare shell with no built-in content. You pass `components` and `docs` directly.
- **`JComponentShowcaseWithContent`** — includes the library's built-in categories and docs. Extra `components` and `docs` are merged with the defaults.

## JComponentShowcaseWithContent

The quickest way to get started. Includes all built-in showcase categories and documentation pages out of the box:

```html
<JComponentShowcaseWithContent />
```

Pass extra components or docs to merge them with the defaults:

```html
<JComponentShowcaseWithContent :components="myComponents" :docs="myDocs" />
```

## JComponentShowcase (bare)

Use this when you want full control over what's displayed — nothing is included by default:

```html
<JComponentShowcase :components="categories" :docs="docs" />
```

The `import-from` prop controls the package name shown in code samples (defaults to `'varmory'`):

```html
<JComponentShowcase import-from="my-lib" :components="categories" :docs="docs" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `components` | Object | `{}` | Categories of showcase items. Keys are category names, values are arrays of Vue components or item objects. |
| `docs` | Object | `{}` | Markdown doc pages. Keys are page names, values are raw markdown strings. |
| `import-from` | String | `'varmory'` | Package name shown in code reference panel. |
| `search-url` | String | `null` | URL to a pre-built `.vecito` search index. When provided, the sidebar uses semantic search instead of substring matching. See [MCP docs](#MCP) for how to build the index. |

## Built-in categories

The showcase auto-discovers `.vue` files from `showcase/categories/*/`. Categories are folder names — numeric prefixes control order and are stripped from display:

```
showcase/categories/
  01 Colors/
    AllColors.vue
  02 Typography/
    Typography.vue
    HelperClasses.vue
  04 Buttons/
    Btn.vue
    BtnDropdown.vue
  06 Helpers/
    CurrentYear.vue
    DarkSwitcher.vue
```

## Adding your own categories

Pass `components` to inject app-specific components. With `JComponentShowcaseWithContent`, these are merged with the built-in categories. Numeric prefixes work the same way for ordering:

```html
<JComponentShowcaseWithContent :components="components" />
```

```js
import MyComponent from './components/MyComponent.vue';

components: {
    '50 My App': [ShowcaseMyComponent],        // name is taken from component's `name` export
    '51 Widgets': [WidgetA, WidgetB],  // multiple items in a category
}
```

## Adding custom docs

Pass `docs` to add markdown pages to the showcase's Readme section. With `JComponentShowcaseWithContent`, these are merged with the built-in docs (README.md, USAGE.md, etc.):

```html
<JComponentShowcaseWithContent :docs="docs" />
```

```js
import myGuide from './docs/MY_GUIDE.md?raw';

docs: {
    'MY_GUIDE': myGuide,
}
```

The key `README` is special — it's used as the default landing page when the showcase loads. Name your index/home doc `README` to make it appear first.

Links between doc pages, e.g. (USAGE.md) or [README](README.md) are automatically intercepted and navigate within the showcase instead of opening a new tab.

## Writing a showcase entry

Each `.vue` file in a category folder is a showcase entry. The component's default export controls how it appears in the nav:

```js
export default {
    name: 'ShowcaseMyComponent',
    components: { MyComponent }, // component to showcase, use it in template of this to show MyComponent in action
    label: 'My Component',       // display name in nav, if empty — derived from component name
    icon: 'widgets',             // Material icon (optional)
    order: 1,                    // sort within category (default 999)
    importName: 'MyComponent',   // shown in code reference panel
    importFrom: 'quasar',       // override package name for import line (optional, defaults to showcase's import-from)
    apiJson: null,               // JSON API definition, follows Quasar docs format (optional)
    code: null,                  // custom code sample (optional, auto-extracted from template if null)
};
```

For real examples, look at the existing showcase entries in `showcase/categories/` — they cover common patterns like prop variants, slot usage, and interactive demos.

Use the standard CSS classes for consistent layout:

```html
<template>
<div class="jShowcase_row jShowcase_column">
    <div class="jShowcase_info">
        <p>Description of the component.</p>
    </div>
    <div class="jShowcase_group">
        <span class="jShowcase_title">Variant Name</span>
        <div class="jShowcase_items">
            <MyComponent />
            <MyComponent color="primary" />
        </div>
    </div>
</div>
</template>
```

## Navigation

The showcase uses URL hashes for navigation (`#Category/ItemName`). You can link between showcase entries:

```html
<a class="jShowcase_infoLink" href="#Buttons/Btn">QBtn</a>
```
