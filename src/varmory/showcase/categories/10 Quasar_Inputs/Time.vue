<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QTime v-model="basic" color="primary" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">24h format, landscape</span>
            <div class="jShowcase_items">
                <QTime v-model="h24" color="secondary" format24h landscape />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">With seconds + Now button</span>
            <div class="jShowcase_items">
                <QTime v-model="withSec" color="accent" with-seconds now-btn />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Readonly</span>
            <div class="jShowcase_items">
                <QTime model-value="14:30" color="info" readonly />
            </div>
        </div>
    </div>
</template>

<script>
import { QTime } from 'quasar';
import QTimeApi from 'quasar/src/components/time/QTime.json';

export default {
    name: 'ShowcaseQuasarTime',
    components: { QTime },
    label: 'Quasar Time',
    icon: 'schedule',
    apiJson: QTimeApi,
    importName: 'QTime',
    importFrom: 'quasar',
    data() {
        return {
            basic: '10:30',
            h24: '18:45',
            withSec: '09:15:30',
        };
    },
};
</script>
