# Building Custom Components with Varmory

Guide for AI agents and developers building Vue 3 components on top of varmory.

## API style

Prefer **Vue Options API** unless the user explicitly asks for Composition API (`<script setup>`). Use **tab indentation** unless the user specifies otherwise.

Split complex components into smaller, focused child components. Define shared CSS classes in the parent component if they can be reused across few children (avoid `scoped` on the parent when children need its classes, or use deep selectors).

## CSS variables, not hardcoded colors

Never hardcode colors. All styling goes through CSS variables that the theme system controls:

```css
/* Brand:    --q-primary, --q-secondary, --q-accent */
/* Status:   --q-positive, --q-negative, --q-info, --q-warning */
/* Surfaces: --q-surface-0 .. --q-surface-3, --q-surface-border, --q-body-bg */
/* Text:     --q-text-bright, --q-text, --q-text-muted, --q-text-faint */
/* Panels:   --q-panel-gradient, --q-panel-compact-gradient */
/* Effects:  --q-glow-primary, --q-glow-accent, --q-shadow-drop, --q-shadow-inset */
/* Fonts:    --font-display (headers), --font-body (text), --font-mono (code/labels) */
/* Sizes:    --q-text-size-small (12px), --q-text-size-default (14px), --q-text-size-readable (18px), --q-text-size-large (20px) */
/* Spacing:  --q-gap-xs (4px), --q-gap-sm (8px), --q-gap-md (16px), --q-gap-lg (24px), --q-gap-xl (40px) */
/* Radii:    --q-radius-sm (2px), --q-radius-md (4px), --q-radius-lg (8px) */
/* Motion:   --q-transition-fast (0.15s), --q-transition-normal (0.25s) */
```

See the **AllColors** showcase for the full list of variables and their values per theme.

### Tints and transparency

Use `color-mix()` to derive tints from theme colors:

```css
color-mix(in srgb, var(--q-primary) 20%, transparent)   /* 20% primary overlay */
color-mix(in srgb, var(--q-primary) 50%, black)          /* darker primary */
color-mix(in srgb, var(--q-primary) 50%, white)          /* lighter primary */
color-mix(in srgb, var(--q-surface-2) 60%, transparent)  /* semi-transparent surface */
```

## Layout patterns

Use flexbox. Quasar's grid classes (`row`, `col-*`, `q-gutter-*`, `q-pa-*`, `q-ma-*`) are available globally.

**Flex row with wrapping:**
```html
<div class="row items-center q-gutter-sm">
	<QBtn label="One" />
	<QBtn label="Two" />
</div>
```

**Responsive grid (Quasar classes):**
```html
<div class="row q-col-gutter-md">
	<div class="col-12 col-md-6">Left</div>
	<div class="col-12 col-md-6">Right</div>
</div>
```

## Component composition

### JPanel — the standard container

```html
<JPanel title="Users" icon="people" footer-text="3 results">
	<!-- content here -->
</JPanel>
```

By default, JPanel applies no padding to its content (so you can drop wide components like QTabPanels directly inside). You'll usually want to add margin to the content yourself:

```html
<JPanel title="Users" icon="people" footer-text="3 results">
	<div class="q-ma-md">
		Content
	</div>
</JPanel>
```

Props: `title`, `icon`, `iconColor`, `accent`, `footerText`, `square`, `fullscreen`, `scroll`
Slots: `default`, `title`, `header`, `header-action`, `footer`

Use the `accent` prop to give the panel a themed background so it stands out from the surrounding layout. See [AccentBackground.md](./AccentBackground.md) for details and the underlying `varmoryBackgroundAccent` CSS hook.

```html
<JPanel title="Actions" accent>
	<template #header-action>
		<QBtn flat round icon="refresh" size="sm" />
	</template>
	<!-- content -->
</JPanel>
```

### Quasar components (commonly used)

**Buttons:**
```html
<QBtn color="primary" label="Save" icon="save" />
<QBtn flat color="primary" label="Cancel" />
<QBtn outline color="negative" label="Delete" icon="delete" />
<QBtn round icon="settings" class="ghost" />   <!-- ghost = minimal, no bg -->
```

**Inputs:**
```html
<QInput v-model="name" label="Name" outlined />
<QSelect v-model="role" :options="roles" label="Role" outlined />
<QToggle v-model="active" label="Active" />
```

**Lists:**
```html
<QList>
	<QItem v-for="item in items" :key="item.id" clickable>
		<QItemSection avatar>
			<QIcon :name="item.icon" />
		</QItemSection>
		<QItemSection>
			<QItemLabel>{{ item.name }}</QItemLabel>
			<QItemLabel caption>{{ item.desc }}</QItemLabel>
		</QItemSection>
		<QItemSection side>
			<QBadge color="primary" :label="item.count" />
		</QItemSection>
	</QItem>
</QList>
```

**Dialogs:**
```html
<QDialog v-model="showDialog">
	<JPanel title="Confirm" style="min-width: 350px">
		<p>Are you sure?</p>
		<template #footer>
			<QBtn flat label="Cancel" v-close-popup />
			<QBtn color="primary" label="OK" v-close-popup />
		</template>
	</JPanel>
</QDialog>
```

**Other:** `QIcon`, `QChip`, `QBanner`, `QSpinner`, `QCircularProgress`, `QTabs`/`QTab`, `QMenu`

## CSS class naming

Follow `ComponentName_elementName` convention:

```css
.myWidget { }
.myWidget_header { }
.myWidget_title { }
.myWidget_body { }
.myWidget_footer { }
```

## Styling rules

1. All colors via CSS variables — never hardcode hex values
2. Use `var(--font-display)` for headings, `var(--font-body)` for text, `var(--font-mono)` for labels/code
3. Use `var(--q-transition-fast)` or `var(--q-transition-normal)` for transitions
4. Use `var(--q-surface-border)` for borders, `var(--q-radius-md)` for border-radius
5. Use `var(--q-gap-*)` for spacing in flex/grid layouts
6. Support dark mode — use `.body--dark` selector when you need mode-specific overrides

**Example custom component style:**

```css
.myWidget {
	background: var(--q-panel-gradient);
	border: 1px solid var(--q-surface-border);
	border-radius: var(--q-radius-md);
	padding: var(--q-gap-md);
	color: var(--q-text);
	font-family: var(--font-body);
	transition: box-shadow var(--q-transition-fast);
}

.myWidget:hover {
	box-shadow: 0 0 12px var(--q-glow-primary);
}

.myWidget_title {
	font-family: var(--font-display);
	color: var(--q-text-bright);
	font-size: var(--q-text-size-large);
	margin-bottom: var(--q-gap-sm);
}

.myWidget_caption {
	font-family: var(--font-mono);
	color: var(--q-text-muted);
	font-size: var(--q-text-size-small);
	text-transform: uppercase;
	letter-spacing: 2px;
}
```

## Dark mode

The theme store manages dark/light mode. Quasar adds `.body--dark` to `<body>` automatically. CSS variables swap values per-mode, so most of the time you don't need mode-specific CSS. When you do:

```css
.body--dark .myWidget {
	border-color: rgba(255, 255, 255, 0.06);
}
```

Programmatic access:

```js
import { useThemeStore } from 'varmory';

const theme = useThemeStore();
theme.isDark       // boolean
theme.toggleDark()
```

## Full example

```vue
<template>
	<JPanel title="Team Members" icon="groups" :footer-text="`${members.length} members`">
		<template #header-action>
			<QBtn flat round icon="person_add" size="sm" color="primary" @click="showAdd = true" />
		</template>

		<QList>
			<QItem v-for="m in members" :key="m.id" clickable>
				<QItemSection avatar>
					<QIcon name="person" color="primary" />
				</QItemSection>
				<QItemSection>
					<QItemLabel>{{ m.name }}</QItemLabel>
					<QItemLabel caption>{{ m.role }}</QItemLabel>
				</QItemSection>
				<QItemSection side>
					<QChip :label="m.status" :color="m.status === 'active' ? 'positive' : 'warning'" dense />
				</QItemSection>
			</QItem>
		</QList>
	</JPanel>
</template>

<script>
export default {
	data() {
		return {
			showAdd: false,
			members: [
				{ id: 1, name: 'Alice', role: 'Engineer', status: 'active' },
				{ id: 2, name: 'Bob', role: 'Designer', status: 'away' },
			],
		};
	},
};
</script>

<style scoped>
.q-item:hover {
	background: color-mix(in srgb, var(--q-primary) 8%, transparent);
}
</style>
```
