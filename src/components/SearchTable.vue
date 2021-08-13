<template>
  <div>
    <input type="text" v-model="searchFilter" />
    <button @click="filterTable">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchFilter: "",
    };
  },
  methods: {
    filterTable() {
      console.log(this.searchFilter);
    },
  },
};
</script>
