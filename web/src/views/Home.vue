<template>
  <div class="home">
    <country-list></country-list>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryList from "@/components/CountryView/CountryList.vue";

export default {
  name: "Home",
  components: {
    CountryList
  }
};
</script>
