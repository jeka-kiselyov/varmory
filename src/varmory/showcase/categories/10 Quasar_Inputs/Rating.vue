<template>
    <div class="jShowcase_row showcaseVertical">
        <div class="ratingRow">
            <span class="ratingLabel">Default</span>
            <QRating v-model="basic" color="primary" />
        </div>
        <div class="ratingRow">
            <span class="ratingLabel">Custom icon</span>
            <QRating v-model="hearts" icon="favorite_border" icon-selected="favorite" color="negative" />
        </div>
        <div class="ratingRow">
            <span class="ratingLabel">Per-icon color</span>
            <QRating v-model="colorful" :color="['negative', 'warning', 'warning', 'positive', 'positive']" no-dimming />
        </div>
        <div class="ratingRow">
            <span class="ratingLabel">Large / readonly</span>
            <QRating :model-value="4" size="sm" color="secondary" readonly />
        </div>
    </div>
</template>

<script>
import { QRating } from 'quasar';
import QRatingApi from '../../definitions/Quasar/QRating.json';

export default {
    name: 'ShowcaseQuasarRating',
    components: { QRating },
    label: 'Quasar Rating',
    icon: 'edit_note',
    apiJson: QRatingApi,
    importName: 'QRating',
    importFrom: 'quasar',
    data() {
        return {
            basic: 3,
            hearts: 4,
            colorful: 3,
        };
    },
};
</script>

<style scoped>
.showcaseVertical {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 10px !important;
}

.ratingRow {
    display: flex;
    align-items: center;
    gap: 12px;
}

.ratingLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: var(--q-text-faint);
    min-width: 90px;
}
</style>
