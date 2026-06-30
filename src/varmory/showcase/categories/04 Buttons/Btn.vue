<template>
    <div class="jShowcase_row jShowcase_column">

        <div class="jShowcase_info">
            When a QBtn has only an icon prop and no label, prefer to pass round (or round dense for tighter layouts) so it renders as a circular icon button.
        </div>

        <!-- Style variants -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Default" />
                <QBtn flat color="primary" label="Flat" />
                <QBtn outline color="primary" label="Outline" />
                <QBtn unelevated color="primary" label="Unelevated" />
                <QBtn push color="primary" label="Push" />
                <QBtn glossy color="primary" label="Glossy" />
            </div>
        </div>

        <!-- Style variants -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Variants</span>
            <div class="jShowcase_items">
                <QBtn class="ghost" label="Ghost" icon="settings" />
            </div>
        </div>


        <!-- Shapes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Shapes</span>
            <div class="jShowcase_items">
                <QBtn color="accent" label="Rounded" rounded />
                <QBtn color="accent" label="Square" square />
                <QBtn color="accent" icon="star" round />
                <QBtn color="accent" icon="rocket_launch" label="FAB" fab />
                <QBtn color="accent" icon="add" fab-mini />
            </div>
        </div>

        <!-- With icons -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Icons</span>
            <div class="jShowcase_items">
                <QBtn color="secondary" icon="flight_takeoff" label="Launch" />
                <QBtn color="secondary" label="Deploy" icon-right="send" />
                <QBtn color="secondary" icon="shield" label="Shield" icon-right="chevron_right" />
                <QBtn outline color="secondary" icon="settings" round />
            </div>
        </div>

        <!-- Colors -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Colors</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Primary" />
                <QBtn color="secondary" label="Secondary" />
                <QBtn color="accent" label="Accent" />
                <QBtn color="positive" label="Positive" />
                <QBtn color="negative" label="Negative" />
                <QBtn color="info" label="Info" />
                <QBtn color="warning" label="Warning" />
            </div>
        </div>

        <!-- Sizes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="xs" size="xs" />
                <QBtn color="primary" label="sm" size="sm" />
                <QBtn color="primary" label="md" size="md" />
                <QBtn color="primary" label="lg" size="lg" />
                <QBtn color="primary" label="xl" size="xl" />
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QBtn color="info" label="Loading" loading />
                <QBtn color="negative" label="Disabled" disable />
                <QBtn color="accent" label="Dense" dense />
                <QBtn color="secondary" icon="bolt" label="Stacked" stack />
                <QBtn color="primary" label="No caps" no-caps />
            </div>
        </div>
    </div>
</template>

<script>
import QBtnApi from 'quasar/src/components/btn/QBtn.json';
import { QBtn } from 'quasar';

export default {
    name: 'ShowcaseQuasarBtn',
    components: {
        QBtn,
    },
    label: 'Quasar Btn',
    icon: 'smart_button',
    apiJson: QBtnApi,
    importName: 'QBtn',
    importFrom: 'quasar',
};
</script>

<style scoped>
</style>
