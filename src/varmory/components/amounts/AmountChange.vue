<template>
    <span v-if="compact" class="amountChange amountChange__compact" :class="positive ? 'positive' : 'negative'">
        {{ positive ? '+' : '' }}{{ percent }}%
    </span>
    <div v-else class="amountChange" :class="positive ? 'positive' : 'negative'">
        <QIcon :name="positive ? 'arrow_drop_up' : 'arrow_drop_down'" size="20px" />
        <span>{{ Math.abs(percent) }}% <template v-if="amount">({{ amount }})</template></span>
        <span v-if="period" class="amountChange_period">{{ period }}</span>
    </div>
</template>

<script>
import { QIcon } from 'quasar';

export default {
    name: 'AmountChange',
    components: { QIcon },
    props: {
        percent: {
            type: Number,
            required: true,
        },
        amount: {
            type: String,
            default: null,
        },
        period: {
            type: String,
            default: null,
        },
        compact: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        positive() {
            return this.percent >= 0;
        },
    },
};
</script>

<style scoped>
.amountChange {
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2px;
}

.amountChange.positive {
    color: var(--q-positive);
}

.amountChange.negative {
    color: var(--q-negative);
}

.amountChange__compact {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 500;
    padding: 1px 6px;
    border-radius: 2px;
}

.amountChange__compact.positive {
    background: color-mix(in srgb, var(--q-positive) 10%, transparent);
}

.amountChange__compact.negative {
    background: color-mix(in srgb, var(--q-negative) 10%, transparent);
}

.amountChange_period {
    font-family: var(--font-mono);
    font-size: 10px;
    margin-left: 6px;
    border-width: 1px;
    border-style: solid;
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--q-text-muted);
    border-color: color-mix(in srgb, var(--q-primary) 12%, transparent);
}
</style>
