<template>
  <div>
    <input v-debounce:500="searchCountries" type="text" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["searchCountries"]),
  },
};
</script>
