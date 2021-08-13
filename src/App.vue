<template>
  <div id="app">
    <BackButton />
    <router-view />
  </div>
</template>

<script>
import BackButton from "@/components/BackButton";
export default {
  components: {
    BackButton,
  },
};
</script>
