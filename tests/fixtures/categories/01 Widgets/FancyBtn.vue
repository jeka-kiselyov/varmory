<template>
    <div class="fancy-btn">
        <button @click="$emit('click')">
            <slot>Click me</slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'FancyBtn',
    label: 'Fancy Button',
    icon: 'smart_button',
    importName: 'FancyBtn',
    importFrom: 'my-lib',
};
</script>
