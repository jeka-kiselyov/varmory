<template>
    <div class="showcaseDocs">
        <JPanel
            :title="currentTitle"
            icon="description"
            icon-color="var(--q-info)"
        >
            <div class="showcaseDocs_content" @click="handleClick">
                <QMarkdown :src="currentContent" no-heading-anchor-links />
            </div>
        </JPanel>
    </div>
</template>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown';
import '@quasar/quasar-ui-qmarkdown/dist/index.css';
import JPanel from '../../components/JPanel.vue';

export default {
    name: 'ShowcaseDocs',
    components: { QMarkdown, JPanel },
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
.showcaseDocs_content {
    padding: 20px 24px;
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--q-text);
    line-height: 1.7;
}

.showcaseDocs_content :deep(h1) {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--q-text-bright);
    margin: 0 0 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--q-surface-border);
}

.showcaseDocs_content :deep(h2) {
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--q-text-bright);
    margin: 24px 0 12px;
}

.showcaseDocs_content :deep(h3) {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 600;
    color: var(--q-text);
    margin: 20px 0 8px;
}

.showcaseDocs_content :deep(p) {
    margin: 0 0 12px;
    color: var(--q-text-muted);
}

.showcaseDocs_content :deep(code) {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--q-accent);
    background: color-mix(in srgb, var(--q-accent) 8%, transparent);
    padding: 1px 5px;
    border-radius: 2px;
}

.showcaseDocs_content :deep(pre) {
    background: var(--q-surface-0);
    border: 1px solid var(--q-surface-border);
    border-radius: 4px;
    padding: 14px 18px;
    margin: 8px 0 16px;
    overflow-x: auto;
}

.showcaseDocs_content :deep(pre code) {
    background: none;
    padding: 0;
    color: var(--q-text);
    font-size: 12px;
    line-height: 1.6;
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
    border-bottom: 1px solid var(--q-surface-border);
    color: var(--q-text-muted);
}

.showcaseDocs_content :deep(td) {
    padding: 6px 12px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-surface-border) 50%, transparent);
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
    color: var(--q-text);
    font-weight: 600;
}

.showcaseDocs_content :deep(hr) {
    border: none;
    border-top: 1px solid var(--q-surface-border);
    margin: 20px 0;
}
</style>
