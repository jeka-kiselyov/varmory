<template>
    <span>{{ year }}</span>
</template>

<script>
export default {
    name: 'JCurrentYear',
    computed: {
        year() {
            return new Date().getFullYear();
        },
    },
};
</script>
