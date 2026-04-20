<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items showcaseVertical">
                <QRadio v-model="selected" val="shields" label="Shields" color="primary" />
                <QRadio v-model="selected" val="weapons" label="Weapons" color="accent" />
                <QRadio v-model="selected" val="engines" label="Engines" color="secondary" />
                <QRadio v-model="selected" val="offline" label="Offline" color="negative" disable />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">With QItem</span>
            <QList>
                <QItem tag="label" v-ripple>
                    <QItemSection avatar>
                        <QRadio v-model="listSelected" val="shields" color="primary" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Shields</QItemLabel>
                        <QItemLabel caption>Deflector array protection</QItemLabel>
                    </QItemSection>
                </QItem>

                <QItem tag="label" v-ripple>
                    <QItemSection avatar>
                        <QRadio v-model="listSelected" val="weapons" color="accent" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Weapons</QItemLabel>
                        <QItemLabel caption>Phaser banks and torpedoes</QItemLabel>
                    </QItemSection>
                </QItem>

                <QItem tag="label" v-ripple>
                    <QItemSection avatar>
                        <QRadio v-model="listSelected" val="engines" color="secondary" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Engines</QItemLabel>
                        <QItemLabel caption>Main thruster control</QItemLabel>
                    </QItemSection>
                </QItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QRadio, QList, QItem, QItemSection, QItemLabel } from 'quasar';
// import QRadioApi from 'quasar/src/components/radio/QRadio.json';
import QRadioApi from 'quasar/src/components/radio/QRadio.json';

export default {
    name: 'ShowcaseQuasarRadio',
    components: { QRadio, QList, QItem, QItemSection, QItemLabel },
    label: 'Quasar Radio',
    icon: 'edit_note',
    apiJson: QRadioApi,
    importName: 'QRadio',
    importFrom: 'quasar',
    data() {
        return {
            selected: 'shields',
            listSelected: 'shields',
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
