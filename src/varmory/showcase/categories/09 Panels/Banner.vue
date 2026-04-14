<template>
<div>
<QBanner class="bg-surface-3 text-bright" rounded>
    <template #avatar>
        <QIcon name="signal_wifi_off" color="secondary" size="sm" />
    </template>
    You have lost connection to the internet.
    This app is offline.
    <template #action>
        <QBtn flat color="info" label="Turn on Wifi" outline />
        <QBtn flat color="secondary" label="Dismiss" />
    </template>
</QBanner>


<QBanner inline-actions dense class="bg-indigo-7 text-white q-mt-sm">
    You have lost connection to the internet. This app is offline.

    <template v-slot:avatar>
        <img
        src="https://cdn.quasar.dev/img/mountains.jpg"
        style="height: 64px"
        />
    </template>
    <template v-slot:action>
        <QBtn flat color="primary" label="Turn ON Wifi" />
    </template>
</QBanner>
</div>
</template>

<script>
import { QBanner, QIcon, QBtn } from 'quasar';
import QBannerApi from '../../definitions/Quasar/QBanner.json';

export default {
    name: 'ShowcaseQuasarBanner',
    components: { QBanner, QIcon, QBtn },
    label: 'Quasar Banner',
    icon: 'dashboard',
    apiJson: QBannerApi,
    importName: 'QBanner',
    importFrom: 'quasar',
};
</script>

<style scoped>
</style>
