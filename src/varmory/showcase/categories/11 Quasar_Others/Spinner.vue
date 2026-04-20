<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Default</span>
            <div class="jShowcase_items">
                <QSpinner color="primary" size="40px" />
                <QSpinner color="secondary" size="40px" :thickness="2" />
                <QSpinner color="accent" size="40px" :thickness="8" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <QSpinner color="primary" size="20px" />
                <QSpinner color="primary" size="30px" />
                <QSpinner color="primary" size="40px" />
                <QSpinner color="primary" size="60px" />
                <QSpinner color="primary" size="80px" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerDots />')">
                    <QSpinnerDots color="primary" size="40px" />
                    <span class="spinnerLabel">Dots</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerBars />')">
                    <QSpinnerBars color="secondary" size="40px" />
                    <span class="spinnerLabel">Bars</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerAudio />')">
                    <QSpinnerAudio color="accent" size="40px" />
                    <span class="spinnerLabel">Audio</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerBall />')">
                    <QSpinnerBall color="positive" size="40px" />
                    <span class="spinnerLabel">Ball</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerCube />')">
                    <QSpinnerCube color="info" size="40px" />
                    <span class="spinnerLabel">Cube</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerGrid />')">
                    <QSpinnerGrid color="warning" size="40px" />
                    <span class="spinnerLabel">Grid</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerHourglass />')">
                    <QSpinnerHourglass color="negative" size="40px" />
                    <span class="spinnerLabel">Hourglass</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerOrbit />')">
                    <QSpinnerOrbit color="primary" size="40px" />
                    <span class="spinnerLabel">Orbit</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerOval />')">
                    <QSpinnerOval color="secondary" size="40px" />
                    <span class="spinnerLabel">Oval</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerPuff />')">
                    <QSpinnerPuff color="accent" size="40px" />
                    <span class="spinnerLabel">Puff</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerRings />')">
                    <QSpinnerRings color="positive" size="40px" />
                    <span class="spinnerLabel">Rings</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerTail />')">
                    <QSpinnerTail color="info" size="40px" />
                    <span class="spinnerLabel">Tail</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerGears />')">
                    <QSpinnerGears color="warning" size="40px" />
                    <span class="spinnerLabel">Gears</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerComment />')">
                    <QSpinnerComment color="negative" size="40px" />
                    <span class="spinnerLabel">Comment</span>
                </div>
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Colors</span>
            <div class="jShowcase_items">
                <QSpinner color="primary" size="40px" />
                <QSpinner color="secondary" size="40px" />
                <QSpinner color="accent" size="40px" />
                <QSpinner color="positive" size="40px" />
                <QSpinner color="negative" size="40px" />
                <QSpinner color="info" size="40px" />
                <QSpinner color="warning" size="40px" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">QInnerLoading</span>
            <div class="jShowcase_items">
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">Content underneath</div>
                    <QInnerLoading :showing="innerActive" color="primary" />
                </div>
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">Custom spinner</div>
                    <QInnerLoading :showing="innerActive">
                        <QSpinnerGears color="accent" size="40px" />
                    </QInnerLoading>
                </div>
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">Dark overlay</div>
                    <QInnerLoading :showing="innerActive" color="secondary" dark />
                </div>
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">With label</div>
                    <QInnerLoading :showing="innerActive" color="primary" label="Loading data..." />
                </div>
            </div>
            <QToggle v-model="innerActive" label="Show loading" color="primary" />
            <p class="innerLoadingNote">
                <strong>WARNING:</strong> The parent element must have <code>position: relative</code> (or the <code>relative-position</code> Quasar class) for the spinner to center correctly.
            </p>
            <p class="innerLoadingNote">
                <strong>WARNING:</strong> QInnerLoading must be the last element inside its parent so it can appear on top of the other content.
            </p>
        </div>
    </div>
</template>

<script>
import {
    QToggle, QInnerLoading,
    QSpinner, QSpinnerDots, QSpinnerBars, QSpinnerAudio,
    QSpinnerBall, QSpinnerCube, QSpinnerGrid, QSpinnerHourglass,
    QSpinnerOrbit, QSpinnerOval, QSpinnerPuff, QSpinnerRings,
    QSpinnerTail, QSpinnerGears, QSpinnerComment,
} from 'quasar';
import QSpinnerApi from 'quasar/src/components/spinner/QSpinner.json';
import QInnerLoadingApi from 'quasar/src/components/inner-loading/QInnerLoading.json';

export default {
    name: 'ShowcaseQuasarSpinner',
    inject: ['showcaseCopy'],
    components: {
        QToggle, QInnerLoading,
        QSpinner, QSpinnerDots, QSpinnerBars, QSpinnerAudio,
        QSpinnerBall, QSpinnerCube, QSpinnerGrid, QSpinnerHourglass,
        QSpinnerOrbit, QSpinnerOval, QSpinnerPuff, QSpinnerRings,
        QSpinnerTail, QSpinnerGears, QSpinnerComment,
    },
    label: 'Spinners / Loading',
    icon: 'auto_awesome',
    apiJson: [
        { name: 'QSpinner', json: QSpinnerApi },
        { name: 'QInnerLoading', json: QInnerLoadingApi },
    ],
    importName: 'QSpinner',
    importFrom: 'quasar',
    data() {
        return {
            innerActive: true,
        };
    },
};
</script>

<style scoped>
.spinnerItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.innerLoadingBox {
    position: relative;
    flex: 1;
    min-width: 120px;
    height: 100px;
    border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
    border-radius: 4px;
    background: color-mix(in srgb, currentColor 4%, transparent);
    overflow: hidden;
}

.innerLoadingContent {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-muted);
}

.innerLoadingNote {
    margin: 4px 0 0;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-warning);
    line-height: 1.5;
}

.innerLoadingNote code {
    background: color-mix(in srgb, var(--q-warning) 12%, transparent);
    padding: 1px 5px;
    border-radius: 3px;
}

.spinnerLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-muted);
    letter-spacing: 0.5px;
}
</style>
