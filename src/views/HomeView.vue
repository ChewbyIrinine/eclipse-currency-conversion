<template>
  <div class="home">
    <h1>Home</h1>
    <pre>{{ currency.currency }}</pre>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCurrencyStore } from '@/stores/currency';

// eslint-disable-next-line no-unused-vars
const currency = useCurrencyStore();

onMounted(() => {
  currency.fetchCurrency();
});
</script>
