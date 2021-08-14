import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//this store should fetch all countries to be used in the CountriesTable component
//this store also fetch the searched countries and change the all countries

export default new Vuex.Store({
  state: {
    allCountries: [],
    isNotFound: false,
  },
  mutations: {
    setCountries(state, countries) {
      state.allCountries = countries;
    },
    setNotFound(state, isNotFound) {
      state.isNotFound = isNotFound;
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
      if (searchParam.length > 0) {
        return fetch(
          "https://restcountries.eu/rest/v2/name/" + searchParam
        ).then(async (response) => {
          if (response.status !== 200) {
            context.commit("setNotFound", true);
            //throw new Error("404");
          } else {
            const data = await response.json();
            context.commit("setNotFound", false);
            context.commit("setCountries", data);
          }
        });
      } else {
        context.commit("setNotFound", false);
        context.dispatch("fetchAllCountries");
      }
    },
  },
  getters: {
    getCountries: (state) => state.allCountries,
    getNotFound: (state) => state.isNotFound,
  },
});
