<template>
  <div id="head">
    <div v-if="type == 'Cities'" class="go-back" title="Go to main page" @click="routeHome">
      <i class="arrow-left"></i>
    </div>
    <div class="filter">
      <input
        class="filtering"
        type="text"
        :placeholder="'Start typing to find your ' + (type=='Countries'?'country':'city')"
        v-bind:value="getFilter(type)"
        @input="setFilter($event.target.value)"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("air", ["getFilter"]),
    type() {
      //filter type to determinat if we are in cities or countries view
      return this.$route.meta.type;
    }
  },
  methods: {
    ...mapMutations("air", ["SET_FILTER_COUNTRY", "SET_FILTER_CITY"]),
    routeHome() {
      this.$router.push("/");
    },
    setFilter(value) {
      if (this.type.toLowerCase() == "countries") {
        this.SET_FILTER_COUNTRY(value);
      } else {
        this.SET_FILTER_CITY(value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/assets/css/top-menu.scss";
</style>