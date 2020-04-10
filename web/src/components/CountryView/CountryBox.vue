<template>
  <div class="country-box">
    <div class="name">{{country.name}}</div>
    <div class="data-wrapper">
      <div class="cities">
        <div class="value">{{country.cities}}</div>
        <div class="text" v-if="country.cities>1">Cities</div>
        <div class="text" v-else>City</div>
      </div>
      <div class="locations">
        <div class="value">{{country.locations}}</div>
        <div class="text" v-if="country.locations>1">Locations</div>
        <div class="text" v-else>Location</div>
      </div>
      <div class="measurements">
        <div class="value">{{country.count}}</div>
        <div class="text">Measurements</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  }
};
</script>