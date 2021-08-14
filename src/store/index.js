import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//this store should fetch all countries to be used in the CountriesTable component
//this store also fetch the searched countries and change the all countries

export default new Vuex.Store({
  state: {
    allCountries: [],
  },
  mutations: {
    setCountries(state, countries) {
      state.allCountries = countries;
    },
  },
  actions: {
    fetchAllCountries(context) {
      return fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setCountries", data);
          return context.state.countries;
        })
        .catch((err) => console.log(err, "in the store action"));
    },
    searchCountries(context, searchParam) {
      // cover 404 error page
      return fetch("https://restcountries.eu/rest/v2/name/" + searchParam)
        .then((response) => response.json())
        .then((data) => {
          context.commit("setCountries", data);
          return context.state.countries;
        })
        .catch((err) => console.log(err, "in the store action search"));
    },
  },
  getters: {},
});
