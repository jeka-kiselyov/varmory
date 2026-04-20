<template>
    <div class="jShowcase_row jShowcase_column showcaseTable">
        <div class="jShowcase_info">
            <p><strong>QTable</strong> is a full-featured data grid — sorting, filtering, pagination, row selection, expandable rows, sticky headers, server-side data, virtual scrolling, and more. The examples below cover only a small slice of its surface area.</p>
            <p>The full prop, slot, and event reference is in the API section below. For more samples and ideas, check the <a href="https://quasar.dev/vue-components/table" target="_blank" rel="noopener">official Quasar documentation</a>.</p>
        </div>

        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <QTable
                :rows="ships"
                :columns="shipColumns"
                row-key="name"
                flat
                bordered
            />
        </div>

        <!-- Selectable + dense -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Selectable &amp; Dense</span>
            <QTable
                v-model:selected="selected"
                :rows="ships"
                :columns="shipColumns"
                row-key="name"
                selection="multiple"
                dense
                flat
                bordered
            />
            <div class="text-caption text-muted q-mt-sm">
                Selected: {{ selected.length }}
            </div>
        </div>

        <!-- Search + pagination + custom body cell -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">With Search &amp; Status Cell</span>
            <QTable
                :rows="systems"
                :columns="systemColumns"
                :filter="filter"
                row-key="name"
                :pagination="{ rowsPerPage: 3 }"
                flat
                bordered
            >
                <template #top-right>
                    <QInput v-model="filter" dense outlined debounce="200" placeholder="Search">
                        <template #append>
                            <QIcon name="search" />
                        </template>
                    </QInput>
                </template>
                <template #body-cell-status="props">
                    <QTd :props="props">
                        <QBadge :color="props.row.color" :label="props.row.status" />
                    </QTd>
                </template>
            </QTable>
        </div>
    </div>
</template>

<script>
import { QTable, QTd, QBadge, QInput, QIcon } from 'quasar';
import QTableApi from 'quasar/src/components/table/QTable.json';

export default {
    name: 'ShowcaseTable',
    components: { QTable, QTd, QBadge, QInput, QIcon },
    label: 'Table',
    icon: 'grid_on',
    apiJson: QTableApi,
    importName: 'QTable',
    importFrom: 'quasar',
    data() {
        return {
            filter: '',
            selected: [],
            shipColumns: [
                { name: 'name', label: 'Vessel', field: 'name', align: 'left', sortable: true },
                { name: 'class', label: 'Class', field: 'class', align: 'left', sortable: true },
                { name: 'crew', label: 'Crew', field: 'crew', align: 'right', sortable: true },
                { name: 'warp', label: 'Warp', field: 'warp', align: 'right', sortable: true, format: v => v.toFixed(1) },
            ],
            ships: [
                { name: 'USS Endeavor', class: 'Explorer', crew: 430, warp: 9.2 },
                { name: 'USS Valkyrie', class: 'Combat', crew: 260, warp: 9.6 },
                { name: 'USS Pioneer', class: 'Science', crew: 180, warp: 8.4 },
                { name: 'USS Horizon', class: 'Medical', crew: 310, warp: 7.8 },
                { name: 'USS Odyssey', class: 'Explorer', crew: 510, warp: 9.4 },
            ],
            systemColumns: [
                { name: 'name', label: 'System', field: 'name', align: 'left', sortable: true },
                { name: 'deck', label: 'Deck', field: 'deck', align: 'right', sortable: true },
                { name: 'status', label: 'Status', field: 'status', align: 'right' },
            ],
            systems: [
                { name: 'Warp Core', deck: 12, status: 'ONLINE', color: 'positive' },
                { name: 'Shields', deck: 5, status: 'CHARGING', color: 'warning' },
                { name: 'Life Support', deck: 3, status: 'NOMINAL', color: 'positive' },
                { name: 'Cloaking Device', deck: 8, status: 'OFFLINE', color: 'negative' },
                { name: 'Phaser Array', deck: 2, status: 'ONLINE', color: 'positive' },
                { name: 'Tractor Beam', deck: 6, status: 'STANDBY', color: 'info' },
            ],
        };
    },
};
</script>

<style scoped>
.showcaseTable {
    max-width: 800px;
}
</style>
