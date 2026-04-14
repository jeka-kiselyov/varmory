<template>
    <div class="jShowcase_row showcaseToggles">
        <QToggle v-model="basic" label="Basic" color="primary" />
        <QToggle v-model="icons" label="With icons" color="accent" checked-icon="check" unchecked-icon="close" />
        <QToggle v-model="dense" label="Dense" color="secondary" dense />
        <QToggle v-model="keepColor" label="Keep color" color="info" keep-color />
        <QToggle :model-value="true" label="Disabled on" color="positive" disable />
        <QToggle :model-value="false" label="Disabled off" color="negative" disable />
    </div>
</template>

<script>
import { QToggle } from 'quasar';
import QToggleApi from '../../definitions/Quasar/QToggle.json';

export default {
    name: 'ShowcaseQuasarToggle',
    components: { QToggle },
    label: 'Quasar Toggle',
    icon: 'edit_note',
    apiJson: QToggleApi,
    importName: 'QToggle',
    importFrom: 'quasar',
    data() {
        return {
            basic: true,
            icons: false,
            dense: true,
            keepColor: false,
        };
    },
};
</script>

<style scoped>
.showcaseToggles {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 4px !important;
}
</style>
