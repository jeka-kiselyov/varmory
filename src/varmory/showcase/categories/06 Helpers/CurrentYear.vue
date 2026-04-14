<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Renders the current year as a <code>&lt;span&gt;</code>. Drop it into copyright lines so you never have to hardcode the year.</p>
        </div>

        <!-- Inline usage -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Inline</span>
            <div class="jShowcase_items">
                <span class="demoText">&copy; <JCurrentYear /> Components</span>
            </div>
        </div>

        <!-- Standalone -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Standalone</span>
            <div class="jShowcase_items">
                <span class="demoText">Current year: <JCurrentYear /></span>
            </div>
        </div>
    </div>
</template>

<script>
import JCurrentYear from '../../../components/helpers/JCurrentYear.vue';

export default {
    name: 'ShowcaseJCurrentYear',
    components: { JCurrentYear },
    label: 'Current Year',
    icon: 'handyman',
    apiJson: null,
    importName: 'JCurrentYear',
    code: null,
};
</script>

<style scoped>
.demoText {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--q-text-muted);
}
</style>
