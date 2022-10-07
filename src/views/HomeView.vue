<template>
  <div class="home">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Number code</th>
          <th>Character code</th>
          <th>Nominal</th>
          <th>Name</th>
          <th>Value</th>
          <th>Previous</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in currenciesStore.getCurrencies" :key="currency.ID">
          <td>{{ currency.NumCode }}</td>
          <td>{{ currency.CharCode }}</td>
          <td>{{ currency.Nominal }}</td>
          <td>{{ currency.Name }}</td>
          <td>{{ currency.Value }}</td>
          <td>{{ currency.Previous }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCurrenciesStore } from '@/stores/currenciesStore';

// eslint-disable-next-line no-unused-vars
const currenciesStore = useCurrenciesStore();

onMounted(() => {
  currenciesStore.fetchCurrencies();
});
</script>
