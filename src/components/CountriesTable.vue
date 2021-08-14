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
      <tr v-for="country in getCountries" :key="country.name">
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
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters(["getCountries", "getNotFound"]),
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
      this.countries = this.getCountries.reverse();
      this.isSortAscending = !this.isSortAscending;
    },
  },
  created() {
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
