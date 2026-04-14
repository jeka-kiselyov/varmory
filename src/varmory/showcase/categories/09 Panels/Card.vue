<template>
    <div class="jShowcase_row">
        <QCard class="showcaseCard" flat bordered>
            <QCardSection>
                <div class="text-h6">Starship Registry</div>
                <div class="text-subtitle2">NCC-1701 — USS Enterprise</div>
            </QCardSection>

            <QCardSection>
                A Constitution-class vessel, flagship of the United Federation
                of Planets. Currently assigned to deep space exploration.
            </QCardSection>

            <QCardActions align="right">
                <QBtn flat color="primary" label="Details" />
                <QBtn flat color="accent" label="Hail" />
            </QCardActions>
        </QCard>
    </div>
</template>

<script>
import { QCard, QCardSection, QCardActions, QBtn } from 'quasar';
import QCardApi from '../../definitions/Quasar/QCard.json';
import QCardSectionApi from '../../definitions/Quasar/QCardSection.json';
import QCardActionsApi from '../../definitions/Quasar/QCardActions.json';

export default {
    name: 'ShowcaseQuasarCard',
    components: { QCard, QCardSection, QCardActions, QBtn },
    label: 'Quasar Card',
    icon: 'dashboard',
    apiJson: [
        { name: 'QCard', json: QCardApi },
        { name: 'QCardSection', json: QCardSectionApi },
        { name: 'QCardActions', json: QCardActionsApi },
    ],
    importName: 'QCard',
    importFrom: 'quasar',
};
</script>
