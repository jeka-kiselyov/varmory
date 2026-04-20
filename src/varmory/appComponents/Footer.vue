<template>
    <footer class="footer">
        <div class="footer_frame">
            <div class="footer_title">
                <span class="footer_dot"></span>
                <span class="footer_label">Varmory</span>
            </div>

            <div class="footer_links">
                <a class="footer_link" href="https://github.com/jeka-kiselyov/varmory" target="_blank" rel="noopener">GitHub</a>
                <a class="footer_link" href="https://varmory-dec8b20a1b83.herokuapp.com/#docs/README" target="_blank" rel="noopener">Docs</a>
            </div>

            <span class="footer_copy">&copy; {{ year }} Varmory</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        year() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style scoped>
.footer {
    margin-top: 32px;
}

.footer_frame {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 20px 16px;
    overflow: hidden;
    backdrop-filter: blur(16px);

    background: var(--q-panel-compact-gradient, var(--q-surface-2, #fff));
    color: var(--q-text, #1a1a1a);
    border-width: 0;
    border-top-width: 1px;
    border-style: solid;
    border-color: var(--q-surface-border, rgba(0, 0, 0, 0.08));
    border-image: linear-gradient(
        90deg,
        transparent 10%,
        color-mix(in srgb, var(--q-primary) 50%, transparent) 30%,
        var(--q-primary) 50%,
        color-mix(in srgb, var(--q-primary) 50%, transparent) 70%,
        transparent 90%
    ) 1;
}

.body--dark .footer_frame {
    background: var(--q-panel-compact-gradient, var(--q-surface-2, #111));
    color: var(--q-text, #fff);
    border-color: var(--q-surface-border, rgba(255, 255, 255, 0.08));
}

.footer_title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-display, inherit);
    font-size: 11px;
    letter-spacing: 3px;
    font-weight: 600;
    color: var(--q-primary);
    text-transform: uppercase;
    user-select: none;
    text-wrap: nowrap;
}

.footer_dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--q-primary);
    flex-shrink: 0;
}

.footer_links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.footer_link {
    font-family: var(--font-mono, inherit);
    font-size: 11px;
    letter-spacing: 0.5px;
    color: var(--q-text-muted, rgba(0, 0, 0, 0.55));
    text-decoration: none;
    transition: color 0.15s ease;
}

.footer_link:hover {
    color: var(--q-text-bright, var(--q-primary));
}

.body--dark .footer_link {
    color: var(--q-text-muted, rgba(255, 255, 255, 0.55));
}

.footer_copy {
    font-family: var(--font-mono, inherit);
    font-size: 11px;
    color: var(--q-text-muted, rgba(0, 0, 0, 0.55));
}

.body--dark .footer_copy {
    color: var(--q-text-muted, rgba(255, 255, 255, 0.55));
}
</style>
