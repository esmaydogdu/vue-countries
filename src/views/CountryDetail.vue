<template>
  <div>
    <h2>capital: {{ countryDetail.capital }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: String,
      required: true,
      default: "Albania",
    },
  },
  data() {
    return {
      countryDetail: {},
    };
  },
  created() {
    fetch(`https://restcountries.eu/rest/v2/name/${this.country}`)
      .then((res) => res.json())
      .then((data) => (this.countryDetail = data[0]))
      .catch((err) => console.error(err));
  },
};
</script>
