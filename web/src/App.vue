<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view />
  </div>
</template>
<script>
import moduleAir from "@/store/air/moduleAir.js";

import TopMenu from "@/components/TopMenu.vue";

export default {
  components: {
    TopMenu
  },
  created() {
    this.$store.registerModule("air", moduleAir);
  }
};
</script>

<style lang="scss">
@import "src/assets/css/main.scss";
</style>
