<template>
    <div class="showcaseMain">
        <QCard class="showcaseCard" flat>
            <div class="showcaseMain_header">
                <QIcon name="widgets" size="14px" color="accent" />
                <span>{{ item?.label || 'COMPONENT' }}</span>
            </div>
            <div v-if="item" class="showcaseMain_content">
                <component :is="item.component" />
            </div>
            <div v-else class="showcaseMain_empty">
                Select a component from the sidebar
            </div>
        </QCard>
    </div>
</template>

<script>
import { QCard, QIcon } from 'quasar';

export default {
    name: 'ShowcaseMain',
    components: { QCard, QIcon },
    props: {
        item: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style scoped>
.showcaseMain {
    min-width: 0;
}

.showcaseMain_header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    font-family: var(--font-display, inherit);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    color: inherit;
    border-bottom: 1px solid color-mix(in srgb, currentColor 10%, transparent);
    user-select: none;
}

.showcaseMain_content {
    padding: 16px 20px;
}

.showcaseMain_empty {
    padding: 40px 20px;
    text-align: center;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-faint);
    letter-spacing: 1px;
}
</style>

<style>
/* Shared classes used by category child components */
.showcaseMain_content .jShowcase_row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
}

.showcaseMain_content .jShowcase_sampleContent {
    padding: 16px 20px;
    font-family: var(--font-body);
    font-size: var(--q-text-size-small);
    color: var(--q-text-muted);
    line-height: 1.5;
}

.showcaseMain_content .jShowcase_title {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-text-faint);
    text-transform: uppercase;
}

.showcaseMain_content .jShowcase_row.jShowcase_column {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
}

.showcaseMain_content .jShowcase_group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.showcaseMain_content .jShowcase_items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
}

/* ── Showcase info block — reusable docs panel ──────────── */

.showcaseMain_content .jShowcase_info {
    font-family: var(--font-body);
    font-size: 13px;
    color: inherit;
    line-height: 1.6;
    margin-bottom: 12px;
    padding: 16px 20px;
    background: color-mix(in srgb, currentColor 4%, transparent);
    border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
    border-radius: 4px;
}

.showcaseMain_content .jShowcase_info p {
    margin: 0 0 8px;
}

.showcaseMain_content .jShowcase_info code {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--q-accent);
    background: color-mix(in srgb, var(--q-accent) 8%, transparent);
    padding: 1px 5px;
    border-radius: 2px;
    white-space: nowrap;
    cursor: pointer;
    transition: background 0.15s ease;
}

.showcaseMain_content .jShowcase_info code:hover {
    background: color-mix(in srgb, var(--q-accent) 18%, transparent);
}

.showcaseMain_content .jShowcase_infoSection {
    margin-top: 12px;
}

.showcaseMain_content .jShowcase_infoLabel {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--q-text-muted);
    display: block;
    margin-bottom: 6px;
}

.showcaseMain_content .jShowcase_infoTable {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.showcaseMain_content .jShowcase_infoRow {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding: 3px 0;
}

.showcaseMain_content .jShowcase_infoRow code {
    flex-shrink: 0;
    min-width: 140px;
}

.showcaseMain_content .jShowcase_infoRow span {
    color: var(--q-text-muted);
    font-size: 12px;
}

.showcaseMain_content .jShowcase_infoLink {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    color: var(--q-primary);
    text-decoration: none;
    border-bottom: 1px dashed color-mix(in srgb, var(--q-primary) 40%, transparent);
    transition: border-color 0.15s ease;
}

.showcaseMain_content .jShowcase_infoLink:hover {
    border-bottom-style: solid;
    border-color: var(--q-primary);
}
</style>
