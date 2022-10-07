import { defineStore } from 'pinia';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const useCurrenciesStore = defineStore({
  id: 'currenciesStore',
  state: () => ({
    currenciesData: {},
  }),
  getters: {
    getCurrencies: (state) => state.currenciesData.Valute,
  },
  actions: {
    async fetchCurrencies() {
      try {
        const data = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        this.currenciesData = data.data;
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
});
