<template>
    <div class="jShowcase_row jShowcase_column showcaseEditor">
        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <QEditor
                v-model="basic"
                class="showcaseEditor_field"
                min-height="6rem"
            />
        </div>

        <!-- With custom toolbar -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Toolbar</span>
            <QEditor
                v-model="toolbar"
                class="showcaseEditor_field"
                min-height="6rem"
                :toolbar="[
                    ['bold', 'italic', 'underline', 'strike'],
                    ['unordered', 'ordered'],
                    ['undo', 'redo'],
                ]"
            />
        </div>

        <!-- Dense + flat -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Dense &amp; Flat</span>
            <QEditor
                v-model="dense"
                class="showcaseEditor_field"
                min-height="5rem"
                dense
                flat
            />
        </div>

        <!-- Read-only -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Read-only</span>
            <QEditor
                v-model="readonly"
                class="showcaseEditor_field"
                min-height="5rem"
                readonly
            />
        </div>
    </div>
</template>

<script>
import { QEditor } from 'quasar';
import QEditorApi from 'quasar/src/components/editor/QEditor.json';

export default {
    name: 'ShowcaseQuasarEditor',
    components: { QEditor },
    label: 'Quasar Editor',
    icon: 'edit_note',
    apiJson: QEditorApi,
    importName: 'QEditor',
    importFrom: 'quasar',
    data() {
        return {
            basic: '<p>Signal logs are editable. Try <b>bold</b>, <i>italic</i>, or a <u>highlight</u>.</p>',
            toolbar: '<p>Custom toolbar — only formatting, lists, and undo/redo.</p>',
            dense: '<p>Dense toolbar, no card border.</p>',
            readonly: '<p>Classified transmission — <b>read-only</b> content.</p>',
        };
    },
};
</script>

<style scoped>
.showcaseEditor_field {
    width: 100%;
    max-width: 640px;
}
</style>
