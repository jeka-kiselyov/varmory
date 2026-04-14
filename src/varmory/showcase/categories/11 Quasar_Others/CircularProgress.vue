<template>
    <div class="jShowcase_row">
        <QCircularProgress
            :value="75"
            size="56px"
            color="primary"
            track-color="grey-8"
            show-value
        >
            75%
        </QCircularProgress>

        <QCircularProgress
            :value="40"
            size="56px"
            color="accent"
            track-color="grey-8"
            rounded
            :thickness="0.3"
            show-value
        >
            <QIcon name="rocket_launch" size="18px" color="accent" />
        </QCircularProgress>

        <QCircularProgress
            indeterminate
            size="56px"
            color="secondary"
            track-color="grey-8"
        />

        <QCircularProgress
            :value="90"
            size="56px"
            color="positive"
            track-color="grey-8"
            :thickness="0.1"
            show-value
            font-size="11px"
        >
            90%
        </QCircularProgress>
    </div>
</template>

<script>
import { QCircularProgress, QIcon } from 'quasar';
import QCircularProgressApi from '../../definitions/Quasar/QCircularProgress.json';

export default {
    name: 'ShowcaseQuasarCircularProgress',
    components: { QCircularProgress, QIcon },
    label: 'Circular Progress',
    icon: 'auto_awesome',
    apiJson: QCircularProgressApi,
    importName: 'QCircularProgress',
    importFrom: 'quasar',
};
</script>
