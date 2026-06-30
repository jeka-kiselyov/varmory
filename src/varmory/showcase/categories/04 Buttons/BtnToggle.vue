<template>
    <div class="column q-gutter-md">
        <div class="jShowcase_info">
            <p>Tip: prefer the <code>no-wrap</code> prop on <strong>QBtnToggle</strong> to keep multi-word option labels (e.g. "Long Board") on a single line, so segments stay the same height when the container is narrow.</p>
            <p>For navigation or switching between layout sections/views, prefer <strong>QTabs</strong> / <strong>QTab</strong> — <code>QBtnToggle</code> is best for compact inline option pickers (e.g. toolbar controls, form-like multi-choice fields).</p>
        </div>

        <div class="column q-gutter-sm">
            <span class="jShowcase_title">Rounded</span>
            <div class="row items-center q-gutter-sm">
                <QBtnToggle
                    v-model="toggleValue"
                    label="Toggle me"
                    toggle-color="primary"
                    no-wrap
                    rounded
                    :options="[
                        { label: 'One', value: 'one' },
                        { label: 'Two', value: 'two' },
                        { label: 'Three', value: 'three' }
                    ]"
                />
            </div>
        </div>

        <div class="column q-gutter-sm">
            <span class="jShowcase_title">Flat with Icons</span>
            <div class="row items-center q-gutter-sm">
                <QBtnToggle
                    v-model="toggleValue"
                    flat
                    toggle-color="primary"
                    no-wrap
                    :style="$q?.dark?.isActive ? 'color: color-mix(in srgb, var(--q-primary), white 50%)' : 'color: color-mix(in srgb, var(--q-primary), black 50%)'"
                    :options="[
                        { label: 'List', value: 'one', icon: 'view_list' },
                        { label: 'Grid', value: 'two', icon: 'grid_view' },
                        { label: 'Long Board', value: 'three', icon: 'dashboard' }
                    ]"
                />
            </div>
        </div>

        <div class="column q-gutter-sm">
            <span class="jShowcase_title">Outline</span>
            <div class="row items-center q-gutter-sm">
                <QBtnToggle
                    v-model="toggleValue"
                    label="Toggle me"
                    toggle-color="accent"
                    color="primary"
                    text-color="primary"
                    no-wrap
                    outline
                    :options="[
                        { label: 'One', value: 'one', icon: (toggleValue == 'one' ? 'check_circle' : undefined) },
                        { label: 'Two', value: 'two', icon: (toggleValue == 'two' ? 'check_circle' : undefined)  },
                        { label: 'Three', value: 'three', icon: (toggleValue == 'three' ? 'check_circle' : undefined)  }
                    ]"
                />
            </div>
        </div>

        <div class="column q-gutter-sm">
            <span class="jShowcase_title">Spread</span>
            <div>
                <QBtnToggle
                    v-model="toggleValue"
                    spread
                    no-wrap
                    toggle-color="primary"
                    :options="[
                        { label: 'One', value: 'one' },
                        { label: 'Two', value: 'two' },
                        { label: 'Three', value: 'three' }
                    ]"
                />
            </div>
        </div>

        <div class="column q-gutter-sm">
            <span class="jShowcase_title">Stack</span>
            <div class="row items-center q-gutter-sm" style="width: 150px;">
                <QBtnToggle
                    v-model="toggleValue"
                    outline
                    stack
                    no-wrap
                    toggle-color="primary"
                    style="color: color-mix(in srgb, var(--q-primary), transparent 50%);"
                    :options="[
                        { label: 'List', value: 'one', icon: 'view_list' },
                        { label: 'Grid', value: 'two', icon: 'grid_view' },
                        { label: 'Long Board', value: 'three', icon: 'dashboard' }
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
