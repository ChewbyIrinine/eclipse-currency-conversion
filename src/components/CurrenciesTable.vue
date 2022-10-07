<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Number code</th>
        <th>Character code</th>
        <th>Nominal</th>
        <th>Name</th>
        <th>Exchange rate</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="currency in currenciesStore.getFilteredCurrencies" :key="currency.ID">
        <td>{{ currency.NumCode }}</td>
        <td>{{ currency.CharCode }}</td>
        <td>{{ currency.Nominal }}</td>
        <td>{{ currency.Name }}</td>
        <td><ExchangeRateCell :value="currency.Value" :previous="currency.Previous" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useCurrenciesStore } from '@/stores/currenciesStore';
import ExchangeRateCell from '@/components/ExchangeRateCell.vue';

const currenciesStore = useCurrenciesStore();
</script>
