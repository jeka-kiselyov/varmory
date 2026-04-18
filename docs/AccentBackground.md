# Accent Background

Varmory ships a global CSS hook, `varmoryBackgroundAccent`, that each theme paints with its own signature background (molten cracks in **rpg**, scanlines in **space**, a warm surface tint in **default**, etc.). It's the mechanism behind JPanel's `accent` prop and can also be applied to any custom component that needs to stand out from the surrounding layout.

## JPanel `accent` prop

`accent` accepts three values:

| Value      | Effect                                                                 |
| ---------- | ---------------------------------------------------------------------- |
| `false`    | Default panel (gradient surface + border). No themed background.       |
| `true`     | The entire panel uses the themed accent background.                    |
| `'header'` | Only the header strip uses the accent background; body stays neutral.  |

```html
<!-- Plain panel -->
<JPanel title="Users" icon="people">…</JPanel>

<!-- Fully accented panel — stands out on the page -->
<JPanel title="Hero stats" icon="star" accent>…</JPanel>

<!-- Accented header only — subtle emphasis -->
<JPanel title="Actions" icon="bolt" accent="header">…</JPanel>
```

Use `accent` sparingly — one or two accented panels per screen read as "primary" or "featured". Too many and the emphasis flattens out.

## The CSS classes

`varmoryBackgroundAccent` is paired with a child `varmoryBackgroundAccentContainer` element. The outer class paints the base background; the container hosts theme-specific overlays (top highlight line, radial glows, etc.) via `::before` / `::after` pseudo-elements.

```html
<div class="varmoryBackgroundAccent">
	<div class="varmoryBackgroundAccentContainer">
		<!-- your content -->
	</div>
</div>
```

Both halves are required. Without the container, themes that rely on pseudo-element overlays (rpg, space, finance) will render a flat background and lose their signature detail.

### Compact variant

Add `varmoryBackgroundAccentCompact` alongside `varmoryBackgroundAccent` to switch to a tighter, low-profile styling — themes typically move the highlight line from the top to the bottom and simplify overlays. Used by `PortfolioHeader` when it collapses on scroll.

```html
<div class="varmoryBackgroundAccent varmoryBackgroundAccentCompact">
	<div class="varmoryBackgroundAccentContainer">…</div>
</div>
```

## When to use it outside JPanel

Reach for `varmoryBackgroundAccent` directly when you're building a custom component that isn't a panel but still wants the themed "this is important" treatment — page headers, hero banners, highlighted sidebars, call-out cards. For anything panel-shaped, prefer `<JPanel accent>` so you also get the consistent border, radius, header, and footer treatment.

## Theming notes

Each theme defines its own `.varmoryBackgroundAccent` rule in `src/varmory/styles/themes/<theme>/common.css`. If you're authoring a new theme, implement at minimum:

- `.varmoryBackgroundAccent` — the base background
- `.varmoryBackgroundAccent .varmoryBackgroundAccentContainer` — `position: relative; overflow: hidden;` so pseudo-element overlays clip cleanly
- Optional: `::before` / `::after` overlays on the container for highlights, glows, scanlines, etc.
- Optional: `.varmoryBackgroundAccentCompact.varmoryBackgroundAccent …` overrides for the compact variant
