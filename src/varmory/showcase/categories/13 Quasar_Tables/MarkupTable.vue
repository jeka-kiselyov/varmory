<template>
    <div class="jShowcase_row jShowcase_column showcaseMarkupTable">
        <div class="jShowcase_info">
            <p><strong>QMarkupTable</strong> is a thin styled wrapper around the native HTML <code>&lt;table&gt;</code> element. Use it when you already have the data rendered as markup and just want Quasar's theming.</p>
            <p>For sorting, filtering, pagination, or row selection, reach for <strong>QTable</strong> instead.</p>
        </div>

        <!-- Default -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Default</span>
            <QMarkupTable>
                <thead>
                    <tr>
                        <th class="text-left">Vessel</th>
                        <th class="text-left">Class</th>
                        <th class="text-right">Crew</th>
                        <th class="text-right">Warp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ship in ships" :key="ship.name">
                        <td class="text-left">{{ ship.name }}</td>
                        <td class="text-left">{{ ship.class }}</td>
                        <td class="text-right">{{ ship.crew }}</td>
                        <td class="text-right">{{ ship.warp.toFixed(1) }}</td>
                    </tr>
                </tbody>
            </QMarkupTable>
        </div>

        <!-- Flat + bordered -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Flat &amp; Bordered</span>
            <QMarkupTable flat bordered>
                <thead>
                    <tr>
                        <th class="text-left">System</th>
                        <th class="text-right">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="sys in systems" :key="sys.name">
                        <td class="text-left">{{ sys.name }}</td>
                        <td class="text-right">
                            <QBadge :color="sys.color" :label="sys.status" />
                        </td>
                    </tr>
                </tbody>
            </QMarkupTable>
        </div>

        <!-- Dense + separator -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Dense with Separator</span>
            <QMarkupTable dense separator="cell" wrap-cells>
                <thead>
                    <tr>
                        <th class="text-left">Stardate</th>
                        <th class="text-left">Entry</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="log in logs" :key="log.date">
                        <td class="text-left">{{ log.date }}</td>
                        <td class="text-left">{{ log.entry }}</td>
                    </tr>
                </tbody>
            </QMarkupTable>
        </div>
    </div>
</template>

<script>
import { QMarkupTable, QBadge } from 'quasar';
import QMarkupTableApi from 'quasar/src/components/markup-table/QMarkupTable.json';

export default {
    name: 'ShowcaseMarkupTable',
    components: { QMarkupTable, QBadge },
    label: 'Markup Table',
    icon: 'table_rows',
    apiJson: QMarkupTableApi,
    importName: 'QMarkupTable',
    importFrom: 'quasar',
    data() {
        return {
            ships: [
                { name: 'USS Endeavor', class: 'Explorer', crew: 430, warp: 9.2 },
                { name: 'USS Valkyrie', class: 'Combat', crew: 260, warp: 9.6 },
                { name: 'USS Pioneer', class: 'Science', crew: 180, warp: 8.4 },
                { name: 'USS Horizon', class: 'Medical', crew: 310, warp: 7.8 },
            ],
            systems: [
                { name: 'Warp Core', status: 'ONLINE', color: 'positive' },
                { name: 'Shields', status: 'CHARGING', color: 'warning' },
                { name: 'Life Support', status: 'NOMINAL', color: 'positive' },
                { name: 'Cloaking Device', status: 'OFFLINE', color: 'negative' },
            ],
            logs: [
                { date: '41024.3', entry: 'Routine sensor sweep of sector 7-G completed. No anomalies.' },
                { date: '41024.5', entry: 'Unidentified signal detected on subspace band 4. Monitoring.' },
                { date: '41024.9', entry: 'Signal resolved as misaligned relay buoy. Dispatched repair drone.' },
                { date: '41025.1', entry: 'Crew rotation complete. All stations reporting nominal.' },
            ],
        };
    },
};
</script>

<style scoped>
.showcaseMarkupTable {
    max-width: 720px;
}
</style>
