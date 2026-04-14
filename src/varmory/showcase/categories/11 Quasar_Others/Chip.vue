<template>
    <div class="jShowcase_row">
      <QChip icon="event" disable>Add to calendar</QChip>
    </div>
</template>

<script>
import { QChip } from 'quasar';

export default {
    name: 'ShowcaseQuasarChip',
    components: { QChip },
    label: 'Quasar Chip',
    icon: 'auto_awesome',
    importName: 'QChip',
    importFrom: 'quasar',
    code: `<QChip icon="event">Add to calendar</QChip>`,
};
</script>
