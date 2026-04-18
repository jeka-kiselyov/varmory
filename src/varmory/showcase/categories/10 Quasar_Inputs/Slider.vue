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
        <div class="sliderItem">
            <span class="sliderLabel">Range</span>
            <QRange v-model="range" color="primary" :min="0" :max="100" label />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">Range stepped</span>
            <QRange v-model="rangeStepped" color="accent" :min="0" :max="100" :step="10" snap markers label />
        </div>
    </div>
</template>

<script>
import { QSlider, QRange } from 'quasar';
import QSliderApi from '../../definitions/Quasar/QSlider.json';
import QRangeApi from '../../definitions/Quasar/QRange.json';

export default {
    name: 'ShowcaseQuasarSlider',
    components: { QSlider, QRange },
    label: 'Slider / Range',
    icon: 'edit_note',
    apiJson: [
        { name: 'QSlider', json: QSliderApi },
        { name: 'QRange', json: QRangeApi },
    ],
    importName: ['QSlider', 'QRange'],
    importFrom: 'quasar',
    data() {
        return {
            basic: 60,
            labeled: 35,
            stepped: 20,
            range: { min: 20, max: 70 },
            rangeStepped: { min: 30, max: 80 },
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
