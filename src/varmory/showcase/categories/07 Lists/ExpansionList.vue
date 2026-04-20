<template>
    <div class="jShowcase_row jShowcase_column">
        <!-- Basic expansion list -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <QList bordered class="rounded-borders showcaseExpansion_list">
                <QExpansionItem
                    icon="rocket_launch"
                    label="Launch Sequence"
                    caption="Pre-flight checklist"
                >
                    <QCard>
                        <QCardSection>
                            Fuel cells primed, navigation locked, launch window open in T-minus 04:22.
                        </QCardSection>
                    </QCard>
                </QExpansionItem>

                <QExpansionItem
                    icon="shield"
                    label="Shield Matrix"
                    caption="Deflector array diagnostics"
                >
                    <QCard>
                        <QCardSection>
                            Forward shields: 98%. Aft shields: 94%. Last recharge cycle completed 00:12:04 ago.
                        </QCardSection>
                    </QCard>
                </QExpansionItem>

                <QExpansionItem
                    icon="sensors"
                    label="Long Range Sensors"
                    caption="Scanning sector 7-G"
                >
                    <QCard>
                        <QCardSection>
                            No hostile signatures detected. Three unidentified objects flagged for review.
                        </QCardSection>
                    </QCard>
                </QExpansionItem>
            </QList>
        </div>

        <!-- Accordion mode -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Accordion (only one open)</span>
            <QList bordered class="rounded-borders showcaseExpansion_list">
                <QExpansionItem group="crew" icon="military_tech" label="Command" default-opened>
                    <QCard>
                        <QCardSection>Captain, First Officer, Tactical.</QCardSection>
                    </QCard>
                </QExpansionItem>
                <QExpansionItem group="crew" icon="engineering" label="Engineering">
                    <QCard>
                        <QCardSection>Chief Engineer, warp core team, damage control.</QCardSection>
                    </QCard>
                </QExpansionItem>
                <QExpansionItem group="crew" icon="medical_services" label="Medical">
                    <QCard>
                        <QCardSection>Chief Medical Officer, nurses, biolab staff.</QCardSection>
                    </QCard>
                </QExpansionItem>
            </QList>
        </div>

        <!-- Header-style variants -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Styled Headers</span>
            <QList bordered class="rounded-borders showcaseExpansion_list">
                <QExpansionItem
                    expand-separator
                    icon="warning"
                    label="Priority Alert"
                    caption="Critical — acknowledge required"
                    header-class="text-negative"
                >
                    <QCard>
                        <QCardSection>
                            Hull breach detected on deck 12. Emergency bulkheads engaged.
                        </QCardSection>
                    </QCard>
                </QExpansionItem>
                <QExpansionItem
                    expand-separator
                    icon="info"
                    label="System Notice"
                    caption="Informational"
                    header-class="text-info"
                    dense
                >
                    <QCard>
                        <QCardSection>
                            Scheduled maintenance window begins at 02:00 stardate 41024.3.
                        </QCardSection>
                    </QCard>
                </QExpansionItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QList, QExpansionItem, QCard, QCardSection } from 'quasar';
import QExpansionItemApi from 'quasar/src/components/expansion-item/QExpansionItem.json';

export default {
    name: 'ShowcaseExpansionList',
    components: { QList, QExpansionItem, QCard, QCardSection },
    label: 'Expansion List',
    icon: 'expand_more',
    order: 4,
    apiJson: QExpansionItemApi,
    importName: 'QExpansionItem',
    importFrom: 'quasar',
};
</script>

<style scoped>
.showcaseExpansion_list {
    min-width: 360px;
    max-width: 560px;
}
</style>
