<template>
    <div class="jShowcase_row showcaseVertical">
        <QCheckbox v-model="nav" label="Navigation" color="primary" />
        <QCheckbox v-model="comms" label="Communications" color="accent" />
        <QCheckbox v-model="life" label="Life support" color="positive" />
        <QCheckbox :model-value="true" label="Locked system" color="info" disable />
        <QCheckbox v-model="indet" label="Indeterminate" color="secondary" toggle-indeterminate />
    </div>
</template>

<script>
import { QCheckbox } from 'quasar';
import QCheckboxApi from 'quasar/src/components/checkbox/QCheckbox.json';

export default {
    name: 'ShowcaseQuasarCheckbox',
    components: { QCheckbox },
    label: 'Quasar Checkbox',
    icon: 'edit_note',
    apiJson: QCheckboxApi,
    importName: 'QCheckbox',
    importFrom: 'quasar',
    data() {
        return {
            nav: true,
            comms: false,
            life: true,
            indet: null,
        };
    },
};
</script>

<style scoped>
.showcaseVertical {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 4px !important;
}
</style>
