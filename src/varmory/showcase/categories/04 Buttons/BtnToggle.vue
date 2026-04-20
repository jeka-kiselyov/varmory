<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QBtnToggle
                    v-model="toggleValue"
                    label="Toggle me"
                    toggle-color="primary"
                    :options="[
                        { label: 'One', value: 'one' },
                        { label: 'Two', value: 'two' },
                        { label: 'Three', value: 'three' }
                    ]"
                />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Flat with Icons</span>
            <div class="jShowcase_items">
                <QBtnToggle
                    v-model="toggleValue"
                    flat
                    toggle-color="primary"
                    text-color="muted"
                    :options="[
                        { label: 'List', value: 'one', icon: 'view_list' },
                        { label: 'Grid', value: 'two', icon: 'grid_view' },
                        { label: 'Board', value: 'three', icon: 'dashboard' }
                    ]"
                />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Outline</span>
            <div class="jShowcase_items">
                <QBtnToggle
                    v-model="toggleValue"
                    label="Toggle me"
                    toggle-color="primary"
                    color="surface-0"
                    text-color="faint"
                    outline
                    :options="[
                        { label: 'One', value: 'one' },
                        { label: 'Two', value: 'two' },
                        { label: 'Three', value: 'three' }
                    ]"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { QBtnToggle } from 'quasar';
import QBtnToggleApi from 'quasar/src/components/btn-toggle/QBtnToggle.json';

export default {
    name: 'ShowcaseBtnToggle',
    components: { QBtnToggle },
    apiJson: QBtnToggleApi,
    importName: 'QBtnToggle',
    importFrom: 'quasar',
    data() {
        return {
            toggleValue: 'one',
        };
    },
    label: 'Btn Toggle',
    icon: 'smart_button',
    code: null,
};
</script>
