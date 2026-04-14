<template>
    <div class="jShowcase_row jShowcase_column">

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

    </div>
</template>

<script>
import QBtnApi from '../varmory/showcase/definitions/Quasar/QBtn.json';
import { QBtn } from 'quasar';

export default {
    name: 'Test',
    components: {
        QBtn,
    },
    icon: 'info',
    label: 'Test Btn',
    apiJson: QBtnApi,
    importName: 'QBtn',
    importFrom: 'quasar',
};
</script>

<style scoped>
</style>
