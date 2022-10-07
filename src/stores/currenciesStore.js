import { defineStore } from 'pinia';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const useCurrenciesStore = defineStore({
  id: 'currenciesStore',
  state: () => ({
    currenciesData: {},
    filter: '',
  }),
  getters: {
    // eslint-disable-next-line arrow-body-style
    getFilteredCurrencies: (state) => {
      // eslint-disable-next-line arrow-body-style
      return Object.values(state.currenciesData.Valute || {}).filter((currency) => {
        return currency.Name.toLowerCase().includes(state.filter.toLowerCase());
      });
    },
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
