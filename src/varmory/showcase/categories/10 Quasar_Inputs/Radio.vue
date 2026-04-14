<template>
    <div class="jShowcase_row showcaseVertical">
        <QRadio v-model="selected" val="shields" label="Shields" color="primary" />
        <QRadio v-model="selected" val="weapons" label="Weapons" color="accent" />
        <QRadio v-model="selected" val="engines" label="Engines" color="secondary" />
        <QRadio v-model="selected" val="offline" label="Offline" color="negative" disable />
    </div>
</template>

<script>
import { QRadio } from 'quasar';
import QRadioApi from '../../definitions/Quasar/QRadio.json';

export default {
    name: 'ShowcaseQuasarRadio',
    components: { QRadio },
    label: 'Quasar Radio',
    icon: 'edit_note',
    apiJson: QRadioApi,
    importName: 'QRadio',
    importFrom: 'quasar',
    data() {
        return { selected: 'shields' };
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
