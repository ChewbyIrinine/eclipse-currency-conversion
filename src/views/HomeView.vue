<template>
  <input
    class="input is-success mb-2"
    type="text"
    placeholder="Filter currency..."
    aria-label="Filter currency..."
    v-model="currenciesStore.filter"
  />
  <CurrenciesTable />
</template>

<script setup>
import { onMounted } from 'vue';
import { useCurrenciesStore } from '@/stores/currenciesStore';
import CurrenciesTable from '@/components/CurrenciesTable.vue';

const currenciesStore = useCurrenciesStore();

onMounted(() => {
  currenciesStore.fetchCurrencies();
});
</script>
