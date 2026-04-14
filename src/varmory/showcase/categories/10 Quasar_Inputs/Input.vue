<template>
    <div class="jShowcase_row jShowcase_column showcaseInput">
        <!-- Basic styles -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Styles</span>
            <div class="jShowcase_items">
                <QInput v-model="basic" label="Default" color="primary" class="showcaseInput_field" />
                <QInput v-model="outlined" label="Outlined" color="primary" outlined class="showcaseInput_field" />
                <QInput v-model="filled" label="Filled" color="primary" filled class="showcaseInput_field" />
                <QInput v-model="standout" label="Standout" color="primary" standout class="showcaseInput_field" />
            </div>
        </div>

        <!-- Shapes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Shapes</span>
            <div class="jShowcase_items">
                <QInput v-model="roundedVal" label="Rounded" color="accent" rounded outlined class="showcaseInput_field" />
                <QInput v-model="squareVal" label="Square" color="accent" square outlined class="showcaseInput_field" />
                <QInput v-model="denseVal" label="Dense" color="accent" dense outlined class="showcaseInput_field" />
                <QInput v-model="borderlessVal" label="Borderless" color="accent" borderless class="showcaseInput_field" />
            </div>
        </div>

        <!-- With decorations -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Decorations</span>
            <div class="jShowcase_items">
                <QInput v-model="search" label="Search" color="secondary" outlined class="showcaseInput_field">
                    <template #prepend><QIcon name="search" /></template>
                </QInput>
                <QInput v-model="credits" label="Credits" color="secondary" outlined prefix="₡" suffix=".00" class="showcaseInput_field" />
                <QInput v-model="clearableVal" label="Clearable" color="secondary" outlined clearable class="showcaseInput_field" />
                <QInput v-model="password" label="Password" :type="showPwd ? 'text' : 'password'" color="secondary" outlined class="showcaseInput_field">
                    <template #append>
                        <QIcon :name="showPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPwd = !showPwd" />
                    </template>
                </QInput>
            </div>
        </div>

        <!-- Hints & counter -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Hints &amp; Counter</span>
            <div class="jShowcase_items">
                <QInput v-model="hinted" label="With hint" hint="Enter callsign" color="info" outlined class="showcaseInput_field" />
                <QInput v-model="counted" label="With counter" color="info" outlined counter :maxlength="20" class="showcaseInput_field" />
            </div>
        </div>

        <!-- Textarea -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Textarea</span>
            <div class="jShowcase_items">
                <QInput v-model="textarea" label="Ship log" type="textarea" color="accent" outlined class="showcaseInput_field showcaseInput_fieldWide" />
                <QInput v-model="autogrow" label="Autogrow" autogrow color="accent" outlined class="showcaseInput_field showcaseInput_fieldWide" />
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QInput model-value="Locked" label="Disabled" color="negative" disable outlined class="showcaseInput_field" />
                <QInput model-value="Read only" label="Readonly" color="warning" readonly outlined class="showcaseInput_field" />
                <QInput model-value="" label="Loading" color="accent" loading outlined class="showcaseInput_field" />
            </div>
        </div>
    </div>
</template>

<script>
import { QInput, QIcon } from 'quasar';
import QInputApi from '../../definitions/Quasar/QInput.json';

export default {
    name: 'ShowcaseQuasarInput',
    components: { QInput, QIcon },
    label: 'Quasar Input',
    icon: 'edit_note',
    apiJson: QInputApi,
    importName: 'QInput',
    importFrom: 'quasar',
    data() {
        return {
            basic: 'NCC-1701',
            outlined: '',
            filled: '',
            standout: '',
            roundedVal: '',
            squareVal: '',
            denseVal: '',
            borderlessVal: 'Borderless text',
            search: '',
            credits: '500',
            clearableVal: 'Clear me',
            password: 'secret',
            showPwd: false,
            hinted: '',
            counted: '',
            textarea: 'Captain\'s log, stardate 41153.7.',
            autogrow: '',
        };
    },
};
</script>

<style scoped>
.showcaseInput :deep(.jShowcase_items) {
    align-items: flex-start;
    gap: 12px;
}

.showcaseInput_field {
    min-width: 180px;
    flex: 1;
    max-width: 240px;
}

.showcaseInput_fieldWide {
    max-width: 400px;
}
</style>
