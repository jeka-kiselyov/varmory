<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Selectable List</span>
            <QList bordered separator>
                <QItem
                    v-for="item in missions"
                    :key="item.id"
                    clickable
                    v-ripple
                    :active="selected === item.id"
                    :style="selected === item.id ? 'background: color-mix(in srgb, var(--q-accent) 10%, transparent)' : ''"
                    @click="selected = item.id"
                >
                    <QItemSection avatar>
                        <QIcon :name="item.icon" :color="selected === item.id ? 'accent' : 'grey'" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel :class="{ 'text-weight-bold': selected === item.id }">{{ item.name }}</QItemLabel>
                        <QItemLabel caption lines="1">{{ item.desc }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QIcon v-if="selected === item.id" name="radio_button_checked" color="accent" />
                        <QIcon v-else name="radio_button_unchecked" color="grey-7" />
                    </QItemSection>
                </QItem>
            </QList>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Multi-line Items</span>
            <QList bordered style="background: transparent; border-color: var(--q-surface-border); border-radius: 4px;">
                <QItem v-for="msg in messages" :key="msg.from" clickable v-ripple>
                    <QItemSection avatar top>
                        <QAvatar color="primary" text-color="white">{{ msg.from[0] }}</QAvatar>
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel overline>{{ msg.from }}</QItemLabel>
                        <QItemLabel>{{ msg.subject }}</QItemLabel>
                        <QItemLabel caption lines="2">{{ msg.body }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side top>
                        <QItemLabel caption>{{ msg.time }}</QItemLabel>
                        <QIcon v-if="msg.starred" name="star" color="warning" size="18px" class="q-mt-xs" />
                    </QItemSection>
                </QItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QList, QItem, QItemSection, QItemLabel, QIcon, QAvatar } from 'quasar';

export default {
    name: 'ShowcaseActiveList',
    components: { QList, QItem, QItemSection, QItemLabel, QIcon, QAvatar },
    label: 'Selectable & Multi-line',
    icon: 'list',
    importName: 'QList',
    importFrom: 'quasar',
    order: 3,
    data() {
        return {
            selected: 'recon',
            missions: [
                { id: 'recon', name: 'Recon Sweep', icon: 'radar', desc: 'Deep space reconnaissance of uncharted sector' },
                { id: 'escort', name: 'Convoy Escort', icon: 'local_shipping', desc: 'Protect supply convoy through hostile corridor' },
                { id: 'rescue', name: 'Search & Rescue', icon: 'sos', desc: 'Locate missing vessel near asteroid belt' },
                { id: 'survey', name: 'Planetary Survey', icon: 'public', desc: 'Catalog resources on newly discovered exoplanet' },
            ],
            messages: [
                {
                    from: 'Admiral Zhao',
                    subject: 'Priority Alpha',
                    body: 'Fleet command has issued new coordinates. Rendezvous at waypoint Echo-7 by 0600. Full tactical readiness required.',
                    time: '14:32',
                    starred: true,
                },
                {
                    from: 'Engineering Bay',
                    subject: 'Maintenance Complete',
                    body: 'Port-side thruster realignment finished ahead of schedule. All subsystems passed diagnostics. Ready for departure.',
                    time: '12:15',
                    starred: false,
                },
                {
                    from: 'Science Div.',
                    subject: 'Anomaly Detected',
                    body: 'Unusual electromagnetic signature detected at bearing 270 mark 15. Recommend investigation when schedule permits.',
                    time: '09:48',
                    starred: true,
                },
            ],
        };
    },
};
</script>
