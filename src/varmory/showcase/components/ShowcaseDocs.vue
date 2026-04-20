<template>
    <div class="showcaseDocs">
        <QCard class="showcaseCard" flat>
            <div class="showcaseDocs_header">
                <QIcon name="description" size="14px" color="info" />
                <span>{{ currentTitle }}</span>
            </div>
            <div class="showcaseDocs_content" @click="handleClick">
                <QMarkdown :src="currentContent" no-heading-anchor-links />
            </div>
        </QCard>
    </div>
</template>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown';
import '@quasar/quasar-ui-qmarkdown/dist/index.css';
import { QCard, QIcon } from 'quasar';

export default {
    name: 'ShowcaseDocs',
    components: { QMarkdown, QCard, QIcon },
    props: {
        docs: {
            type: Object,
            required: true,
        },
        activePage: {
            type: String,
            default: 'README',
        },
    },
    emits: ['navigate'],
    computed: {
        currentContent() {
            return this.docs[this.activePage] || '';
        },
        currentTitle() {
            return this.activePage === 'README' ? 'README' : this.activePage;
        },
    },
    methods: {
        resolveDocName(href) {
            // docs/THEMING.md or ./docs/THEMING.md
            const docsMatch = href.match(/(?:\.\/)?docs\/([^/]+)\.md(?:#.*)?$/);
            if (docsMatch && this.docs[docsMatch[1]]) return docsMatch[1];

            // bare README.md or THEMING.md (raw attribute or resolved full URL)
            const bareMatch = href.match(/\/?([\w.-]+)\.md(?:#.*)?$/);
            if (bareMatch && this.docs[bareMatch[1]]) return bareMatch[1];

            return null;
        },
        handleClick(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const name = this.resolveDocName(link.getAttribute('href') || '')
                || this.resolveDocName(link.href || '');
            if (name) {
                e.preventDefault();
                e.stopPropagation();
                this.$emit('navigate', name);
                this.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
    },
};
</script>

<style scoped>
.showcaseDocs_header {
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

.showcaseDocs_content {
    padding: 20px 24px;
    font-family: var(--font-body);
    font-size: 14px;
    color: inherit;
    line-height: 1.7;
}

.showcaseDocs_content :deep(h1) {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0 0 16px;
    padding-bottom: 8px;
}

.showcaseDocs_content :deep(h2) {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 24px 0 12px;
}

.showcaseDocs_content :deep(h3) {
    font-size: 14px;
    font-weight: 600;
    margin: 20px 0 8px;
}

.showcaseDocs_content :deep(p) {
    margin: 0 0 12px;
}

.showcaseDocs_content :deep(code) {
    font-size: 12px;
    color: var(--q-accent);
    background: color-mix(in srgb, var(--q-accent) 8%, transparent);
    padding: 1px 5px;
    border-radius: 2px;
}

.showcaseDocs_content :deep(pre) {
    background: color-mix(in srgb, var(--q-accent) 8%, transparent);
    border-radius: 4px;
    padding: 14px 18px;
    margin: 0;
    overflow-x: auto;
}

.showcaseDocs_content :deep(pre code) {
    background: none;
    padding: 0;
    color: inherit;
    font-size: 12px;
    line-height: 1.6;
}
.body--dark .showcaseDocs_content :deep(pre code) {
    color: #fff;
}

.showcaseDocs_content :deep(a) {
    color: var(--q-primary);
    text-decoration: none;
    border-bottom: 1px dashed color-mix(in srgb, var(--q-primary) 40%, transparent);
    transition: border-color 0.15s ease;
}

.showcaseDocs_content :deep(a:hover) {
    border-bottom-style: solid;
    border-color: var(--q-primary);
}

.showcaseDocs_content :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 8px 0 16px;
    font-size: 13px;
}

.showcaseDocs_content :deep(th) {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 1px;
    text-align: left;
    padding: 8px 12px;
    border-bottom: 1px solid color-mix(in srgb, currentColor 15%, transparent);
    color: var(--q-text-muted);
}

.showcaseDocs_content :deep(td) {
    padding: 6px 12px;
    border-bottom: 1px solid color-mix(in srgb, color-mix(in srgb, currentColor 15%, transparent) 50%, transparent);
    color: var(--q-text-muted);
}

.showcaseDocs_content :deep(ul),
.showcaseDocs_content :deep(ol) {
    padding-left: 20px;
    margin: 0 0 12px;
    color: var(--q-text-muted);
}

.showcaseDocs_content :deep(li) {
    margin-bottom: 4px;
}

.showcaseDocs_content :deep(strong) {
    color: inherit;
    font-weight: 600;
}

.showcaseDocs_content :deep(hr) {
    border: none;
    border-top: 1px solid color-mix(in srgb, currentColor 15%, transparent);
    margin: 20px 0;
}
</style>
