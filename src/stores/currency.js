import { defineStore } from 'pinia';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const useCurrencyStore = defineStore({
  id: 'currency',
  state: () => ({
    currency: { 123: 123 },
  }),
  getters: {
    getCurrency: (state) => state.currency,
  },
  actions: {
    async fetchCurrency() {
      try {
        const data = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        this.currency = data.data;
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
});
