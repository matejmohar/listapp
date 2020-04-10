<template>
  <div class="country-wrapper">
    <country-box v-for="country in getFilteredCountries" :key="country.code" :country="country"></country-box>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import CountryBox from "./CountryBox.vue";

export default {
  computed: {
    ...mapGetters("air", ["getFilteredCountries"])
  },
  components: {
    CountryBox
  }
};
</script>
<style lang="scss">
@import "src/assets/css/country-list.scss";
</style>