<template>
  <div>
    <SearchTable />
    <table>
      <tr>
        <th>
          Country
          <button @click="toggleSort">{{ sortButtonText }}</button>
        </th>
        <th>Capital</th>
        <th>Population</th>
      </tr>
      <tr v-for="country in allCountries" :key="country.name">
        <td>
          <router-link
            :to="{ name: 'CountryDetail', params: { country: country.name } }"
            >{{ country.name }}</router-link
          >
        </td>
        <td>{{ country.capital }}</td>
        <td>{{ country.population }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SearchTable from "./SearchTable.vue";
export default {
  components: {
    SearchTable,
  },
  data() {
    return {
      countries: [],
      isSortAscending: false,
      // searchFilter: "",
    };
  },
  computed: {
    ...mapState(["allCountries"]),
    sortButtonText() {
      if (this.isSortAscending) {
        return "A - Z";
      } else {
        return "Z - A";
      }
    },
  },
  methods: {
    ...mapActions(["fetchAllCountries", "searchCountries"]),
    toggleSort() {
      this.countries = this.countries.reverse();
      this.isSortAscending = !this.isSortAscending;
    },
    // async filterTable() {
    //   try {
    //     const response = await fetch(
    //       `https://restcountries.eu/rest/v2/name/${this.searchFilter}`
    //     );
    //     if (response.status == 404) {
    //       alert("Country not found");
    //       return;
    //     } else if (response.status == 200) {
    //       const countries = await response.json();
    //       this.countries = countries;
    //     }
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // },
  },
  created() {
    // fetch("https://restcountries.eu/rest/v2/all")
    //   .then((res) => res.json())
    //   .then((countries) => (this.countries = countries))
    //   .catch((err) => console.log(err.message));
    this.fetchAllCountries();
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  max-width: 600px;
}

td,
th {
  border: 1px solid #333;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
