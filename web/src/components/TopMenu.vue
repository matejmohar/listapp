<template>
  <div id="head">
    <div class="filter">
      <input
        class="filtering"
        type="text"
        placeholder="Start typing to find your country"
        v-bind:value="getFilter"
        @input="SET_FILTER($event.target.value)"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("air", ["getFilter"])
  },
  methods: {
    ...mapMutations("air", ["SET_FILTER"])
  }
};
</script>
<style lang="scss" scoped>
@import "src/assets/css/top-menu.scss";
</style>