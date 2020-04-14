<template>
  <div class="home">
    <div v-if="!callCompleted" class="before-load-info">{{callState}}</div>
    <city-list v-else :countryCode="countryCode"></city-list>
  </div>
</template>

<script>
// @ is an alias to /src
import CityList from "@/components/CityView/CityList.vue";

import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "Country",
  data() {
    return {
      countryCode: null,
      callCompleted: false,
      callState: "Loading..."
    };
  },
  computed: {
    ...mapGetters("air", ["getParameters"])
  },
  methods: {
    ...mapActions("air", [
      "fetchLatestMeasurementsForCountry",
      "fetchLocationsForCountry",
      "fetchParameters"
    ]),

    ...mapMutations("air", ["CLEAR_PREVIOUS_COUNTRY"])
  },
  async created() {
    this.CLEAR_PREVIOUS_COUNTRY(); // clears data of previous selected country

    this.countryCode = this.$route.params.code;

    try {
      //fetch parameters only if we don't have it yet.
      if (!this.getParameters.length) await this.fetchParameters();

      let measurements = this.fetchLatestMeasurementsForCountry(
        this.countryCode
      );
      let locations = this.fetchLocationsForCountry(this.countryCode);

      await measurements;
      await locations;

      this.callCompleted = true;
    } catch (e) {
      this.callState =
        "Sorry, there was a problem getting data for selected country, please try again :(";
    }
  },
  components: {
    CityList
  }
};
</script>
