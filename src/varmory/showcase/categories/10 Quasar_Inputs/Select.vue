<template>
    <div class="jShowcase_row jShowcase_column showcaseSelect">
        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="basic"
                    :options="shipSystems"
                    label="Ship system"
                    color="primary"
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="basicOutlined"
                    :options="shipSystems"
                    label="Outlined"
                    color="primary"
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="basicFilled"
                    :options="shipSystems"
                    label="Filled"
                    color="primary"
                    filled
                    class="showcaseSelect_field"
                />
            </div>
        </div>

        <!-- Multiple with chips -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Multiple + Chips</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="crew"
                    :options="crewOptions"
                    label="Assign crew"
                    color="accent"
                    multiple
                    use-chips
                    outlined
                    class="showcaseSelect_field showcaseSelect_fieldWide"
                />
            </div>
        </div>

        <!-- Object options with emit-value -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Object Options</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="sector"
                    :options="sectorOptions"
                    label="Destination sector"
                    color="secondary"
                    emit-value
                    map-options
                    outlined
                    class="showcaseSelect_field showcaseSelect_fieldWide"
                />
            </div>
        </div>

        <!-- Dense + Rounded + Clearable -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="dense"
                    :options="shipSystems"
                    label="Dense"
                    color="info"
                    dense
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="rounded"
                    :options="shipSystems"
                    label="Rounded"
                    color="info"
                    rounded
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="clearable"
                    :options="shipSystems"
                    label="Clearable"
                    color="info"
                    clearable
                    outlined
                    class="showcaseSelect_field"
                />
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QSelect
                    :model-value="'Engines'"
                    :options="shipSystems"
                    label="Disabled"
                    color="negative"
                    disable
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    :model-value="'Shields'"
                    :options="shipSystems"
                    label="Readonly"
                    color="warning"
                    readonly
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    :options="[]"
                    label="Loading"
                    color="accent"
                    loading
                    outlined
                    class="showcaseSelect_field"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { QSelect } from 'quasar';
import QSelectApi from '../../definitions/Quasar/QSelect.json';

export default {
    name: 'ShowcaseQuasarSelect',
    components: { QSelect },
    label: 'Quasar Select',
    icon: 'edit_note',
    apiJson: QSelectApi,
    importName: 'QSelect',
    importFrom: 'quasar',
    data() {
        return {
            basic: 'Shields',
            basicOutlined: null,
            basicFilled: null,
            crew: ['Helm', 'Tactical'],
            sector: 'alpha',
            dense: null,
            rounded: null,
            clearable: 'Weapons',
            shipSystems: ['Shields', 'Weapons', 'Engines', 'Sensors', 'Communications', 'Life support'],
            crewOptions: ['Helm', 'Tactical', 'Science', 'Engineering', 'Medical', 'Operations'],
            sectorOptions: [
                { label: 'Alpha Quadrant', value: 'alpha' },
                { label: 'Beta Quadrant', value: 'beta' },
                { label: 'Gamma Quadrant', value: 'gamma' },
                { label: 'Delta Quadrant', value: 'delta', disable: true },
            ],
        };
    },
};
</script>

<style scoped>
.showcaseSelect :deep(.jShowcase_items) {
    align-items: flex-start;
    gap: 12px;
}

.showcaseSelect_field {
    min-width: 180px;
    flex: 1;
    max-width: 240px;
}

.showcaseSelect_fieldWide {
    max-width: 400px;
}
</style>
