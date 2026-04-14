<template>
    <div class="jShowcase_row jShowcase_column">
        <!-- Basic with Submenus -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic with Submenus</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="File">
                    <QMenu>
                        <QList dense style="min-width: 150px">
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="folder_open" /></QItemSection>
                                <QItemSection>Open...</QItemSection>
                            </QItem>
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="note_add" /></QItemSection>
                                <QItemSection>New File</QItemSection>
                            </QItem>
                            <QSeparator />
                            <QItem clickable>
                                <QItemSection avatar><QIcon name="ios_share" /></QItemSection>
                                <QItemSection>Export As</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>PDF</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>CSV</QItemSection>
                                        </QItem>
                                        <QItem clickable>
                                            <QItemSection>Image</QItemSection>
                                            <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                            <QMenu auto-close anchor="top end" self="top start">
                                                <QList dense>
                                                    <QItem clickable>
                                                        <QItemSection>PNG</QItemSection>
                                                    </QItem>
                                                    <QItem clickable>
                                                        <QItemSection>JPEG</QItemSection>
                                                    </QItem>
                                                    <QItem clickable>
                                                        <QItemSection>SVG</QItemSection>
                                                    </QItem>
                                                </QList>
                                            </QMenu>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                            <QSeparator />
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="close" /></QItemSection>
                                <QItemSection>Quit</QItemSection>
                            </QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="secondary" icon="more_vert" round flat>
                    <QMenu>
                        <QList dense style="min-width: 140px">
                            <QItem clickable v-close-popup>
                                <QItemSection>Profile</QItemSection>
                            </QItem>
                            <QItem clickable>
                                <QItemSection>Notifications</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Email</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Push</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>SMS</QItemSection>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                            <QSeparator />
                            <QItem clickable v-close-popup>
                                <QItemSection>Logout</QItemSection>
                            </QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Context Menu with Submenus -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Context Menu</span>
            <div class="jShowcase_items">
                <div class="contextTarget">
                    Right-click here
                    <QMenu context-menu>
                        <QList dense style="min-width: 150px">
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="content_cut" /></QItemSection>
                                <QItemSection>Cut</QItemSection>
                            </QItem>
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="content_copy" /></QItemSection>
                                <QItemSection>Copy</QItemSection>
                            </QItem>
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="content_paste" /></QItemSection>
                                <QItemSection>Paste</QItemSection>
                            </QItem>
                            <QSeparator />
                            <QItem clickable>
                                <QItemSection avatar><QIcon name="sort" /></QItemSection>
                                <QItemSection>Sort By</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Name</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Date Modified</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Size</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Type</QItemSection>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                            <QItem clickable>
                                <QItemSection avatar><QIcon name="visibility" /></QItemSection>
                                <QItemSection>View</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Grid</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>List</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Compact</QItemSection>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                        </QList>
                    </QMenu>
                </div>
            </div>
        </div>

        <!-- Positioning -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Positioning</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Bottom Left">
                    <QMenu anchor="bottom left" self="top left">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="accent" label="Top Right">
                    <QMenu anchor="top right" self="bottom right">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="secondary" label="Fit Width" style="min-width: 160px">
                    <QMenu fit>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="info" label="Cover">
                    <QMenu cover>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Behavior -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Behavior</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Auto Close">
                    <QMenu auto-close>
                        <QList>
                            <QItem clickable><QItemSection>Click anywhere to close</QItemSection></QItem>
                            <QItem clickable><QItemSection>No v-close-popup needed</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="negative" label="Persistent">
                    <QMenu persistent>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Must click item to close</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>ESC won't close either</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="accent" label="Touch Position">
                    <QMenu touch-position>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Opens at click position</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Not anchored to button</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Transitions -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Transitions</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Slide Down">
                    <QMenu transition-show="slide-down" transition-hide="slide-up">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="secondary" label="Scale">
                    <QMenu transition-show="scale" transition-hide="scale">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="accent" label="Jump Down">
                    <QMenu transition-show="jump-down" transition-hide="jump-up">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Max Height / Scrollable -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Scrollable</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Max Height 200px">
                    <QMenu max-height="200px">
                        <QList>
                            <QItem v-for="n in 12" :key="n" clickable v-close-popup>
                                <QItemSection>Item {{ n }}</QItemSection>
                            </QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>
    </div>
</template>

<script>
import { QBtn, QMenu, QList, QItem, QItemSection, QIcon, QSeparator } from 'quasar';
import QMenuApi from '../../definitions/Quasar/QMenu.json';

export default {
    name: 'ShowcaseMenu',
    components: { QBtn, QMenu, QList, QItem, QItemSection, QIcon, QSeparator },
    label: 'Menu',
    icon: 'menu',
    apiJson: QMenuApi,
    importName: 'QMenu',
    importFrom: 'quasar',
};
</script>

<style scoped>
.contextTarget {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 80px;
    border: 1px dashed var(--q-primary);
    border-radius: 4px;
    color: var(--q-text-muted);
    font-family: var(--font-mono);
    font-size: 12px;
    user-select: none;
}
</style>
