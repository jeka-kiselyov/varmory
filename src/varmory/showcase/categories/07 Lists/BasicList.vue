<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic List</span>
            <QList bordered separator>
                <QItem clickable v-ripple>
                    <QItemSection avatar>
                        <QIcon name="rocket_launch" color="primary" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Launch Sequence</QItemLabel>
                        <QItemLabel caption>Initiate main thruster ignition</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QIcon name="chevron_right" color="grey" />
                    </QItemSection>
                </QItem>

                <QItem clickable v-ripple>
                    <QItemSection avatar>
                        <QIcon name="shield" color="positive" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Shield Matrix</QItemLabel>
                        <QItemLabel caption>Deflector array at 98% capacity</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QBadge color="positive" label="ONLINE" />
                    </QItemSection>
                </QItem>

                <QItem clickable v-ripple>
                    <QItemSection avatar>
                        <QIcon name="sensors" color="warning" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Long Range Sensors</QItemLabel>
                        <QItemLabel caption>Scanning sector 7-G for anomalies</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QBadge color="warning" label="SCANNING" />
                    </QItemSection>
                </QItem>

                <QItem clickable v-ripple disable>
                    <QItemSection avatar>
                        <QIcon name="bolt" color="grey" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Warp Drive</QItemLabel>
                        <QItemLabel caption>Cooldown in progress — 12 min remaining</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QBadge color="negative" label="OFFLINE" />
                    </QItemSection>
                </QItem>

                <QExpansionItem icon="groups" label="Crew Manifest" caption="42 officers, 388 enlisted">
                    <QCard>
                        <QCardSection>
                            All duty stations filled. 3 officers on shore leave. Next rotation begins stardate 41028.7.
                        </QCardSection>
                    </QCard>
                </QExpansionItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QList, QItem, QItemSection, QItemLabel, QIcon, QBadge, QExpansionItem, QCard, QCardSection } from 'quasar';
import QListApi from 'quasar/src/components/item/QList.json';
import QItemApi from 'quasar/src/components/item/QItem.json';
import QItemSectionApi from 'quasar/src/components/item/QItemSection.json';
import QItemLabelApi from 'quasar/src/components/item/QItemLabel.json';
import QExpansionItemApi from 'quasar/src/components/expansion-item/QExpansionItem.json';

export default {
    name: 'ShowcaseBasicList',
    components: { QList, QItem, QItemSection, QItemLabel, QIcon, QBadge, QExpansionItem, QCard, QCardSection },
    label: 'Basic List',
    icon: 'list',
    order: 1,
    apiJson: [
        { name: 'QList', json: QListApi },
        { name: 'QItem', json: QItemApi },
        { name: 'QItemSection', json: QItemSectionApi },
        { name: 'QItemLabel', json: QItemLabelApi },
        { name: 'QExpansionItem', json: QExpansionItemApi },
    ],
    importName: 'QList',
    importFrom: 'quasar',
};
</script>
