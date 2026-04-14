<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Round button that toggles dark/light mode via the theme store. Drop it into headers or toolbars.</p>
            <p>Accepts all <a class="jShowcase_infoLink" href="#Buttons/Btn">QBtn</a> props (e.g.
                <code @click="copy('size')">size</code>,
                <code @click="copy('color')">color</code>,
                <code @click="copy('outline')">outline</code>)
                — they pass through to the underlying button.</p>
        </div>

        <!-- Default -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Default</span>
            <div class="jShowcase_items">
                <JDarkSwitcher />
            </div>
        </div>

        <!-- Sizes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <JDarkSwitcher size="xs" />
                <JDarkSwitcher size="sm" />
                <JDarkSwitcher size="md" />
                <JDarkSwitcher size="lg" />
            </div>
        </div>

        <!-- Colors -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Colors</span>
            <div class="jShowcase_items">
                <JDarkSwitcher color="primary" />
                <JDarkSwitcher color="secondary" :round="false" label="Toggle" />
                <JDarkSwitcher color="info" />
                <JDarkSwitcher color="negative" />
            </div>
        </div>

        <!-- Outline -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Outline</span>
            <div class="jShowcase_items">
                <JDarkSwitcher outline />
                <JDarkSwitcher outline color="primary" />
                <JDarkSwitcher outline color="accent" />
            </div>
        </div>

        <!-- Not flat -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Raised (flat=false)</span>
            <div class="jShowcase_items">
                <JDarkSwitcher :flat="false" />
                <JDarkSwitcher :flat="false" color="primary" />
                <JDarkSwitcher :flat="false" color="accent" />
            </div>
        </div>

        <!-- Glossy -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Glossy</span>
            <div class="jShowcase_items">
                <JDarkSwitcher glossy :flat="false" color="primary" />
                <JDarkSwitcher glossy :flat="false" color="accent" />
            </div>
        </div>
    </div>
</template>

<script>
import JDarkSwitcher from '../../../components/helpers/JDarkSwitcher.vue';

export default {
    name: 'ShowcaseJDarkSwitcher',
    components: { JDarkSwitcher },
    label: 'Dark Switcher',
    icon: 'dark_mode',
    apiJson: null,
    importName: 'JDarkSwitcher',
    inject: ['showcaseCopy'],
    code: null,
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
</script>
