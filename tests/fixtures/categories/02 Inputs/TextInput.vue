<template>
    <div class="text-input">
        <label>{{ label }}</label>
        <input v-model="value" type="text" />
    </div>
</template>

<script>
export default {
    name: 'TextInput',
    label: 'Text Input',
    icon: 'edit',
    importName: ['TextInput', 'TInput'],
    importFrom: 'my-lib',
};
</script>
