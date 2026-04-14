<template>
    <div class="showcaseSliders">
        <div class="sliderItem">
            <span class="sliderLabel">Basic</span>
            <QSlider v-model="basic" color="primary" />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">With label</span>
            <QSlider v-model="labeled" color="accent" label label-always />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">Stepped</span>
            <QSlider v-model="stepped" color="secondary" :min="0" :max="50" :step="10" snap markers label />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">Disabled</span>
            <QSlider :model-value="40" color="info" disable />
        </div>
    </div>
</template>

<script>
import { QSlider } from 'quasar';
import QSliderApi from '../../definitions/Quasar/QSlider.json';

export default {
    name: 'ShowcaseQuasarSlider',
    components: { QSlider },
    label: 'Quasar Slider',
    icon: 'edit_note',
    apiJson: QSliderApi,
    importName: 'QSlider',
    importFrom: 'quasar',
    data() {
        return {
            basic: 60,
            labeled: 35,
            stepped: 20,
        };
    },
};
</script>

<style scoped>
.showcaseSliders {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}

.sliderItem {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.sliderLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: var(--q-text-faint);
}
</style>
