<script setup>
import { defineAsyncComponent } from 'vue';
const emit = defineEmits(['mounted']);

const AsyncComponent = defineAsyncComponent({
    loader: () => import('./JComponentShowcaseWithContent.vue'),
    delay: 10, // delay before showing loading component
    timeout: 3000, // error after 3 seconds
});

const onLoaded = () => {
    emit('mounted');
};
</script>
<template>
    <Suspense @resolve="onLoaded">
        <template #default>
            <AsyncComponent />
        </template>
        <template #fallback>
            <div>Loading...</div>
        </template>
    </Suspense>
</template>