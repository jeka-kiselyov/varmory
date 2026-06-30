<template>
    <div class="info-panel">
        <h3>{{ title }}</h3>
        <p><slot /></p>
    </div>
</template>

<script>
export default {
    name: 'InfoPanel',
    label: 'Info Panel',
    icon: 'info',
    importName: 'InfoPanel',
    importFrom: 'my-lib',
};
</script>
