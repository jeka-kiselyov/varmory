<template>
    <span class="amountDisplay">
        <span class="amountDisplay_currency" :style="{ fontSize: subSize + 'px' }">{{ currencySymbol }}</span>
        <span class="amountDisplay_whole" :style="{ fontSize: size + 'px' }">{{ wholeFormatted }}</span>
        <span class="amountDisplay_decimal" :style="{ fontSize: subSize + 'px' }">.{{ decimalFormatted }}</span>
    </span>
</template>

<script>
const CURRENCY_SYMBOLS = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CNY: '¥',
    KRW: '₩',
    BTC: '₿',
    ETH: 'Ξ',
};

export default {
    name: 'AmountDisplay',
    props: {
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            default: 'USD',
        },
        size: {
            type: Number,
            default: 48,
        },
    },
    computed: {
        currencySymbol() {
            return CURRENCY_SYMBOLS[this.currency] || this.currency;
        },
        wholeFormatted() {
            return Math.floor(Math.abs(this.amount)).toLocaleString();
        },
        decimalFormatted() {
            return (Math.abs(this.amount) % 1).toFixed(2).substring(2);
        },
        subSize() {
            return Math.round(this.size * 0.58);
        },
    },
};
</script>

<style scoped>
.amountDisplay {
    display: inline-flex;
    align-items: baseline;
    gap: 1px;
    font-family: var(--font-display);
    line-height: 1;
    color: color-mix(in srgb, var(--q-primary) 80%, black);
}

.amountDisplay_currency {
    align-self: flex-start;
    font-weight: 400;
    opacity: 0.6;
    vertical-align: top;
    margin-right: 2px;
}
.amountDisplay_whole {
    font-weight: 700;
    letter-spacing: -1px;
}

.amountDisplay_decimal {
    font-weight: 400;
    opacity: 0.5;
}
</style>
