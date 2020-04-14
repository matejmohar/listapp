<template>
  <div class="home">
    <div v-if="!callCompleted" class="before-load-info">{{callState}}</div>
    <country-list v-else></country-list>
  </div>
</template>
<script>
import CountryList from "@/components/CountryView/CountryList.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      callCompleted: false,
      callState: "Loading..."
    };
  },
  computed: {
    ...mapGetters("air", ["getAllCountries"])
  },
  methods: {
    ...mapActions("air", ["fetchCountries"])
  },
  async created() {
    try {
      //we don't need to query again if we already have countries
      if (!this.getAllCountries.length) await this.fetchCountries();
      this.callCompleted = true;
    } catch (e) {
      this.callState = "Can not load countries, please try again :( ";
    }
  },
  components: {
    CountryList
  }
};
</script>
