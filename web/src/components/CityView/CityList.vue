<template>
  <div class="city-wrapper">
    <div v-for="(data,index) of getFilteredCities" :key="index">
      <div class="city-name">{{data.name}}</div>
      <div class="location-wrapper box-wrapper">
        <location-box
          v-for="(location, index) of getLatestMeasurementsForCity(data.city)"
          :key="index"
          :location="location"
        ></location-box>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import LocationBox from "./LocationBox.vue";

export default {
  props: {
    countryCode: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters("air", ["getLatestMeasurementsForCity", "getFilteredCities"])
  },
  components: {
    LocationBox
  }
};
</script>
<style lang="scss">
@import "src/assets/css/city-list.scss";
</style>