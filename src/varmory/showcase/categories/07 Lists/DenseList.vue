<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Dense List</span>
            <QList dense bordered separator>
                <QItem v-for="item in crewLog" :key="item.name" clickable v-ripple>
                    <QItemSection avatar>
                        <QAvatar size="18px" :color="item.color" text-color="white" :icon="item.icon" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>{{ item.name }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QItemLabel caption>{{ item.role }}</QItemLabel>
                    </QItemSection>
                </QItem>
            </QList>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Dense with Padding</span>
            <QList dense bordered padding>
                <QItemLabel header class="jShowcase_title">Navigation Log</QItemLabel>
                <QItem v-for="(entry, i) in navLog" :key="i" clickable v-ripple>
                    <QItemSection>
                        <QItemLabel>{{ entry.coord }}</QItemLabel>
                        <QItemLabel caption>{{ entry.note }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side top>
                        <QItemLabel caption>{{ entry.time }}</QItemLabel>
                    </QItemSection>
                </QItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QList, QItem, QItemSection, QItemLabel, QAvatar } from 'quasar';

export default {
    name: 'ShowcaseDenseList',
    components: { QList, QItem, QItemSection, QItemLabel, QAvatar },
    label: 'Dense List',
    icon: 'list',
    importName: 'QList',
    importFrom: 'quasar',
    order: 2,
    data() {
        return {
            crewLog: [
                { name: 'Cdr. Voss', role: 'Captain', icon: 'military_tech', color: 'primary' },
                { name: 'Lt. Nakamura', role: 'Pilot', icon: 'flight', color: 'accent' },
                { name: 'Dr. Okafor', role: 'Medical', icon: 'healing', color: 'positive' },
                { name: 'Eng. Petrov', role: 'Engineer', icon: 'build', color: 'warning' },
                { name: 'Spc. Reyes', role: 'Science', icon: 'science', color: 'secondary' },
            ],
            navLog: [
                { coord: 'α Centauri B-3', note: 'Orbital insertion complete', time: '08:12' },
                { coord: 'Sector 9-Kilo', note: 'Asteroid field traversal', time: '06:45' },
                { coord: 'Relay Station 7', note: 'Fuel resupply', time: '03:22' },
                { coord: 'Nebula NGC-1277', note: 'Sensor sweep logged', time: '01:10' },
            ],
        };
    },
};
</script>
