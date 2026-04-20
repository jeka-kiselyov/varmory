<template>
    <div class="jShowcase_row jShowcase_column">
        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Simple" @click="simple = true" />
                <QBtn color="accent" label="With Card" @click="card = true" />
                <QBtn color="secondary" label="Persistent" @click="persistent = true" />
            </div>
        </div>

        <QDialog v-model="simple">
            <QCard>
                <QCardSection>
                    <div class="text-h6">Incoming Transmission</div>
                </QCardSection>
                <QCardSection>
                    Signal detected from sector 7G. Awaiting decryption.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="primary" label="Dismiss" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="card">
            <QCard>
                <QCardSection class="row items-center">
                    <QIcon name="warning" size="28px" color="warning" class="q-mr-sm" />
                    <span class="text-h6">Confirm Action</span>
                </QCardSection>
                <QCardSection>
                    Divert auxiliary power to forward shields? This will reduce life support to minimum levels on decks 7 through 12.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn class="ghost" label="Cancel" v-close-popup />
                    <QBtn color="negative" label="Confirm" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="persistent" persistent>
            <QCard>
                <QCardSection>
                    <div class="text-h6">Authorization Required</div>
                </QCardSection>
                <QCardSection>
                    This dialog cannot be dismissed by clicking outside or pressing ESC. Enter command override code.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="accent" label="Override" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <!-- Positions -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Positions</span>
            <div class="jShowcase_items">
                <QBtn v-for="pos in positions" :key="pos" color="info" :label="pos" @click="openPositioned(pos)" />
            </div>
        </div>

        <QDialog v-model="positioned" :position="positionValue">
            <QCard>
                <QCardSection>
                    <div class="text-h6">Position: {{ positionValue }}</div>
                </QCardSection>
                <QCardSection>
                    Dialog anchored to the {{ positionValue }} of the viewport.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="info" label="Close" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <!-- Sizes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <QBtn color="warning" label="Maximized" @click="maximized = true" />
                <QBtn color="warning" label="Full Width" @click="fullWidth = true" />
                <QBtn color="negative" label="Seamless" @click="seamless = true" />
            </div>
        </div>

        <QDialog v-model="maximized" maximized>
            <QCard class="showcaseDialog_cardMax">
                <QCardSection class="row items-center">
                    <span class="text-h6">Maximized Dialog</span>
                    <QSpace />
                    <QBtn class="ghost" icon="close" v-close-popup />
                </QCardSection>
                <QCardSection>
                    This dialog fills the entire viewport.
                </QCardSection>
            </QCard>
        </QDialog>

        <QDialog v-model="fullWidth" full-width>
            <QCard>
                <QCardSection>
                    <div class="text-h6">Full Width</div>
                </QCardSection>
                <QCardSection>
                    Spans the full width of the viewport.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="warning" label="Close" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="seamless" seamless position="bottom">
            <QCard>
                <QCardSection class="row items-center">
                    <QIcon name="info" size="24px" color="info" class="q-mr-sm" />
                    <span>Seamless — no backdrop, page remains interactive.</span>
                    <QSpace />
                    <QBtn class="ghost" icon="close" icon-size="14px" v-close-popup />
                </QCardSection>
            </QCard>
        </QDialog>

        <!-- Scroll handling -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Scroll Handling</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Scrollable Content" @click="scrollable = true" />
                <QBtn color="accent" label="Sticky Header/Footer" @click="stickyScroll = true" />
                <QBtn color="secondary" label="Long Form" @click="longForm = true" />
            </div>
        </div>

        <QDialog v-model="scrollable" style="display: block;">
            <QCard>
                <QCardSection>
                    <div class="text-h6">Ship Systems Log</div>
                </QCardSection>
                <QSeparator />
                <QCardSection class="scroll">
                    <p v-for="n in 122" :key="n">Log entry {{ n }}: Routine diagnostic of subsystem {{ String.fromCharCode(64 + n) }}. All parameters within operational tolerance. Variance from baseline: {{ (Math.random() * 2).toFixed(3) }}%. Timestamp: stardate {{ 41000 + n * 7 }}.{{ n }}.</p>
                </QCardSection>
                <QSeparator />
                <QCardActions align="right">
                    <QBtn color="primary" label="Close" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="stickyScroll">
            <QCard style="min-width: 500px; max-width: 80vw;">
                <QCardSection class="row items-center q-pb-none">
                    <div class="text-h6">Crew Manifest</div>
                    <QSpace />
                    <QBtn class="ghost" icon="close" v-close-popup />
                </QCardSection>
                <QSeparator class="q-mt-sm" />
                <QCardSection style="max-height: 50vh" class="scroll">
                    <QList>
                        <QItem v-for="(officer, i) in crewList" :key="i">
                            <QItemSection avatar>
                                <QIcon :name="officer.icon" color="accent" />
                            </QItemSection>
                            <QItemSection>
                                <QItemLabel>{{ officer.name }}</QItemLabel>
                                <QItemLabel caption>{{ officer.role }}</QItemLabel>
                            </QItemSection>
                            <QItemSection side>
                                <QBadge outline :color="officer.status === 'Active' ? 'positive' : 'warning'" :label="officer.status" />
                            </QItemSection>
                        </QItem>
                    </QList>
                </QCardSection>
                <QInnerLoading :showing="isLoading">
                    <QSpinner size="50px" color="primary" />
                </QInnerLoading>
                <QSeparator />
                <QCardSection class="row justify-between items-center q-py-sm">
                    <span class="text-caption" style="color: var(--q-text-muted);">{{ crewList.length }} officers</span>
                    <QBtn class="ghost" icon="refresh" label="Toggle" @click="isLoading = !isLoading" />
                    <QBtn color="accent" icon="star" label="Acknowledge" v-close-popup />
                </QCardSection>
            </QCard>
        </QDialog>

        <QDialog v-model="longForm">
            <QCard style="min-width: 33vw; max-width: 80vw;">
                <QCardSection class="row items-center q-pb-none">
                    <div class="text-h6">Mission Parameters</div>
                    <QSpace />
                    <QBtn class="ghost" icon="close" v-close-popup />
                </QCardSection>
                <QSeparator class="q-mt-sm" />
                <QCardSection class="scroll" style="max-height: 300px;">
                    <QInput v-model="form.name" label="Mission name" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.sector" label="Target sector" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.objective" label="Primary objective" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.secondary" label="Secondary objective" outlined dense class="q-mb-sm" />
                    <QSelect v-model="form.priority" :options="['Critical', 'High', 'Standard', 'Low']" label="Priority" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.crew" label="Crew count" type="number" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.duration" label="Estimated duration (days)" type="number" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.notes" label="Additional notes" type="textarea" outlined dense autogrow />
                </QCardSection>
                <QSeparator />
                <QCardActions align="right">
                    <QBtn class="ghost" label="Cancel" v-close-popup />
                    <QBtn color="secondary" label="Submit" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>
    </div>
</template>

<script>
import { QBtn, QDialog, QCard, QCardSection, QCardActions, QIcon, QSpace, QSeparator, QList, QItem, QItemSection, QItemLabel, QBadge, QInnerLoading, QSpinner, QInput, QSelect } from 'quasar';
import QDialogApi from 'quasar/src/components/dialog/QDialog.json';

export default {
    name: 'ShowcaseDialog',
    label: 'Quasar Dialog',
    icon: 'picture_in_picture',
    components: { QBtn, QDialog, QCard, QCardSection, QCardActions, QIcon, QSpace, QSeparator, QList, QItem, QItemSection, QItemLabel, QBadge, QInnerLoading, QSpinner, QInput, QSelect },
    apiJson: QDialogApi,
    importName: 'QDialog',
    importFrom: 'quasar',
    data() {
        return {
            isLoading: false,

            simple: false,
            card: false,
            persistent: false,
            accentFull: false,
            accentHeader: false,
            positioned: false,
            positionValue: 'top',
            maximized: false,
            fullWidth: false,
            seamless: false,
            scrollable: false,
            stickyScroll: false,
            longForm: false,
            positions: ['top', 'right', 'bottom', 'left'],
            form: {
                name: '', sector: '', objective: '', secondary: '',
                priority: 'Standard', crew: '', duration: '', notes: '',
            },
            crewList: [
                { name: 'Cdr. Vasquez', role: 'First Officer', icon: 'military_tech', status: 'Active' },
                { name: 'Lt. Okafor', role: 'Helm', icon: 'explore', status: 'Active' },
                { name: 'Lt. Cdr. Chen', role: 'Chief Engineer', icon: 'engineering', status: 'Active' },
                { name: 'Dr. Petrov', role: 'Chief Medical', icon: 'medical_services', status: 'Active' },
                { name: 'Ens. Nakamura', role: 'Science Officer', icon: 'science', status: 'Active' },
                { name: 'Lt. Mbeki', role: 'Tactical', icon: 'shield', status: 'Active' },
                { name: 'Lt. Johansson', role: 'Communications', icon: 'cell_tower', status: 'On Leave' },
                { name: 'Ens. Park', role: 'Navigation', icon: 'near_me', status: 'Active' },
                { name: 'Cdr. Al-Rashid', role: 'Security Chief', icon: 'security', status: 'Active' },
                { name: 'Lt. Torres', role: 'Operations', icon: 'settings', status: 'On Leave' },
            ],
        };
    },
    methods: {
        openPositioned(pos) {
            this.positionValue = pos;
            this.positioned = true;
        },
    },
};
</script>

<style scoped>
</style>
