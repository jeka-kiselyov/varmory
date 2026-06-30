# Building Custom Components with Varmory

Guide for AI agents and developers building Vue 3 components on top of varmory.

## API style

Prefer **Vue Options API** unless the user explicitly asks for Composition API (`<script setup>`). Use **tab indentation** unless the user specifies otherwise.

Split complex components into smaller, focused child components. Define shared CSS classes in the parent component if they can be reused across few children (avoid `scoped` on the parent when children need its classes, or use deep selectors).

## CSS variables, not hardcoded colors

Never hardcode colors. Quasar exposes the brand palette through CSS variables — prefer those so your components automatically adapt to the host app's theme:

```css
/* Brand:    --q-primary, --q-secondary, --q-accent */
/* Status:   --q-positive, --q-negative, --q-info, --q-warning */
```

For surface/text/spacing/font tokens you can either use your app's own variables or Quasar's built-in classes (`.bg-*`, `.text-*`, `.q-pa-*`, etc.). For text color and borders inside cards, prefer `currentColor` and `inherit` so the element blends with whatever the host theme sets.

### Tints and transparency

Use `color-mix()` to derive tints from brand colors or from `currentColor`:

```css
color-mix(in srgb, var(--q-primary) 20%, transparent)    /* 20% primary overlay */
color-mix(in srgb, var(--q-primary) 50%, black)          /* darker primary */
color-mix(in srgb, var(--q-primary) 50%, white)          /* lighter primary */
color-mix(in srgb, currentColor 8%, transparent)         /* subtle tint that adapts to light/dark */
color-mix(in srgb, currentColor 15%, transparent)        /* subtle border that adapts to light/dark */
```

## Layout patterns

Use flexbox. Quasar's grid classes (`row`, `col-*`, `q-gutter-*`, `q-pa-*`, `q-ma-*`) are available globally.

For spacing between flex children, prefer Quasar's `q-gutter-*` / `q-col-gutter-*` classes (`xs`=4, `sm`=8, `md`=16, `lg`=24, `xl`=48) over inline `style="gap: Npx"`. Pick the closest size — only fall back to inline `gap` when a non-standard pixel value is actually required.

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

### Container: QCard

Use Quasar's `QCard` as the standard container. Wrap the card in a small header + body pattern so every component has a consistent shape:

[QCard](#Panels/Card)


Add `flat` for no shadow, `bordered` for a thin outline.

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
	<QCard style="min-width: 350px">
		<QCardSection>Are you sure?</QCardSection>
		<QCardActions align="right">
			<QBtn flat label="Cancel" v-close-popup />
			<QBtn color="primary" label="OK" v-close-popup />
		</QCardActions>
	</QCard>
</QDialog>
```

**Other:** `QIcon`, `QChip`, `QBanner`, `QSpinner`, `QCircularProgress`, `QTabs`/`QTab`, `QMenu`, `QExpansionItem`, `QMarkupTable`, `QTable`, `QEditor`

### Full Quasar component reference

All Quasar components are available globally. See the [Quasar docs](https://quasar.dev/vue-components/) for props, slots, and events on each one.

**Layout & structure:** `QLayout`, `QHeader`, `QFooter`, `QDrawer`, `QPage`, `QPageContainer`, `QPageScroller`, `QPageSticky`, `QToolbar`, `QToolbarTitle`, `QBar`, `QSpace`, `QSeparator`

**Navigation:** `QTabs`, `QTab`, `QTabPanels`, `QTabPanel`, `QRouteTab`, `QBreadcrumbs`, `QBreadcrumbsEl`, `QStepper`, `QStep`, `QStepperNavigation`, `QPagination`, `QMenu`, `QTooltip`

**Buttons:** `QBtn`, `QBtnDropdown`, `QBtnGroup`, `QBtnToggle`, `QFab`, `QFabAction`

**Form inputs:** `QForm`, `QField`, `QInput`, `QSelect`, `QCheckbox`, `QRadio`, `QToggle`, `QOptionGroup`, `QSlider`, `QRange`, `QRating`, `QKnob`, `QDate`, `QTime`, `QColor`, `QFile`, `QUploader`, `QUploaderAddTrigger`, `QEditor`

**Lists, tables & data:** `QList`, `QItem`, `QItemSection`, `QItemLabel`, `QExpansionItem`, `QMarkupTable`, `QTable`, `QTr`, `QTh`, `QTd`, `QTree`, `QVirtualScroll`, `QInfiniteScroll`

**Cards & content:** `QCard`, `QCardSection`, `QCardActions`, `QBanner`, `QChatMessage`, `QTimeline`, `QTimelineEntry`

**Dialogs & popups:** `QDialog`, `QPopupEdit`, `QPopupProxy`

**Media & visuals:** `QAvatar`, `QBadge`, `QChip`, `QIcon`, `QImg`, `QVideo`, `QParallax`, `QResponsive`, `QCarousel`, `QCarouselControl`, `QCarouselSlide`

**Progress & feedback:** `QSpinner` (plus variants: `QSpinnerAudio`, `QSpinnerBall`, `QSpinnerBars`, `QSpinnerBox`, `QSpinnerClock`, `QSpinnerComment`, `QSpinnerCube`, `QSpinnerDots`, `QSpinnerFacebook`, `QSpinnerGears`, `QSpinnerGrid`, `QSpinnerHearts`, `QSpinnerHourglass`, `QSpinnerInfinity`, `QSpinnerIos`, `QSpinnerOrbit`, `QSpinnerOval`, `QSpinnerPie`, `QSpinnerPuff`, `QSpinnerRadio`, `QSpinnerRings`, `QSpinnerTail`), `QCircularProgress`, `QLinearProgress`, `QAjaxBar`, `QInnerLoading`, `QSkeleton`, `QPullToRefresh`

**Utilities & observers:** `QSplitter`, `QScrollArea`, `QScrollObserver`, `QResizeObserver`, `QIntersection`, `QSlideTransition`, `QSlideItem`, `QNoSsr`

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

1. Use brand CSS variables for colors (`--q-primary` etc.) — never hardcode hex values
2. For text/surfaces/borders inside cards, prefer `inherit` and `currentColor`-derived mixes so components adapt to whatever theme the host app sets
3. Use Quasar's built-in utility classes when you can (`q-pa-md`, `q-ma-sm`, `row`, `col-*`, `items-center`, `bg-primary`, `text-muted`, …) — they cover most layout/spacing/typography needs
4. Support dark mode — use the `.body--dark` selector when you need mode-specific overrides (Quasar manages this class automatically)

**Example custom component style:**

```css
.myWidget {
	background: transparent;                /* inherit from parent card */
	border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
	border-radius: 4px;
	padding: 16px;
	color: inherit;
	transition: box-shadow 0.15s ease;
}

.myWidget:hover {
	box-shadow: 0 0 12px color-mix(in srgb, var(--q-primary) 20%, transparent);
}

.myWidget_title {
	color: var(--q-primary);
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 8px;
}

.myWidget_caption {
	color: color-mix(in srgb, currentColor 60%, transparent);
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 2px;
}
```

## Dark mode

Quasar manages dark/light mode and adds `.body--dark` to `<body>` automatically. If you're layering on theme CSS variables that swap per-mode, most styles don't need mode-specific rules. When you do:

```css
.body--dark .myWidget {
	border-color: rgba(255, 255, 255, 0.06);
}
```

Programmatic access via Quasar's dark plugin:

```js
this.$q.dark.isActive   // boolean
this.$q.dark.toggle()
this.$q.dark.set(true)  // or 'auto'
```

## Full example

```vue
<template>
	<QCard flat bordered>
		<div class="row items-center q-pa-md">
			<QIcon name="groups" color="primary" />
			<span class="text-caption text-uppercase q-ml-sm">Team Members</span>
			<QSpace />
			<QBtn flat round icon="person_add" size="sm" color="primary" @click="showAdd = true" />
		</div>
		<QSeparator />

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

		<QSeparator />
		<div class="q-pa-sm text-caption text-muted">
			{{ members.length }} members
		</div>
	</QCard>
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
