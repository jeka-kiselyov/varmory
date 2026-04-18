<template>
    <div class="jShowcase_row jShowcase_column">
        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="primary" label="Actions">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection avatar><QIcon name="edit" /></QItemSection>
                            <QItemSection>Edit</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection avatar><QIcon name="content_copy" /></QItemSection>
                            <QItemSection>Duplicate</QItemSection>
                        </QItem>
                        <QSeparator />
                        <QItem clickable v-close-popup>
                            <QItemSection avatar><QIcon name="delete" /></QItemSection>
                            <QItemSection>Delete</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="secondary" icon="add" label="Create">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection>New File</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection>New Folder</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>

        <!-- Split -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Split</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="primary" icon="save" label="Save" split @click="null">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection>Save as Draft</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection>Save & Publish</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="accent" icon="share" label="Share" split @click="null">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection>Copy Link</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection>Email</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>

        <!-- Style Variants -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="primary" label="Flat" flat>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Outline" outline>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Unelevated" unelevated>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Push" push>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Dense" dense>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="info" label="Loading" loading />
                <QBtnDropdown color="negative" label="Disabled" disable />
                <QBtnDropdown color="primary" label="No Icon Animation" no-icon-animation>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>
    </div>
</template>

<script>
import { QBtnDropdown, QList, QItem, QItemSection, QIcon, QSeparator } from 'quasar';
import QBtnDropdownApi from '../../definitions/Quasar/QBtnDropdown.json';

export default {
    name: 'ShowcaseQuasarBtnDropdown',
    components: { QBtnDropdown, QList, QItem, QItemSection, QIcon, QSeparator },
    label: 'Quasar Btn Dropdown',
    icon: 'smart_button',
    apiJson: QBtnDropdownApi,
    importName: 'QBtnDropdown',
    importFrom: 'quasar',
};
</script>
