<template>
  <div class="home">
    <CountriesTable />
  </div>
</template>

<script>
// @ is an alias to /src
import CountriesTable from "@/components/CountriesTable.vue";

export default {
  name: "Home",
  components: {
    CountriesTable,
  },
};
</script>
