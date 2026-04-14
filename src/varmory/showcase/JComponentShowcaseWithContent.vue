<template>
    <JComponentShowcase
        :components="allComponents"
        :docs="allDocs"
        v-bind="$attrs"
    />
</template>

<script>
import JComponentShowcase from './JComponentShowcase.vue';
import { mergeCategories, mergeDocs } from '../includes/showcaseHelpers.js';

export default {
    name: 'JComponentShowcaseWithContent',
    components: { JComponentShowcase },
    inheritAttrs: false,
    props: {
        components: {
            type: Object,
            default: () => ({}),
        },
        docs: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        allComponents() {
            return mergeCategories(this.components);
        },
        allDocs() {
            return mergeDocs(this.docs);
        },
    },
};
</script>
