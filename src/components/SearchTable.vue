<template>
  <div>
    <input v-debounce:500="searchCountries" type="text" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchFilter: "",
    };
  },
  methods: {
    ...mapActions(["searchCountries"]),
  },
};
</script>
