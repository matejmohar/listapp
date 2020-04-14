<template>
  <div class="location-box box">
    <div class="name box-name">{{location.location}}</div>
    <div class="data-wrapper">
      <div v-for="parameter of parameters" :key="parameter.id" class="parameter-wrapper">
        <label class="parameter-name" :title="parameter.description">{{parameter.name}}</label>
        <label class="parameter-value">
          <b>{{parameter.value}}</b>
          {{parameter.preferredUnit}}
        </label>
        <label class="parameter-timestamp">{{new Date(parameter.lastUpdated).toLocaleString()}}</label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters("air", ["getParameterById"]),
    parameters() {
      //prepare data for dispay - match parameter and measurement
      let pars = [];
      for (let measurement of this.location.measurements) {
        let parameter = this.getParameterById(measurement.parameter);
        if (!parameter) continue;
        let data = {
          ...parameter,
          ...measurement
        };
        pars = pars.filter(o => o.id != data.id); //sometimes, there are two same measurements, we don't want that.
        pars.push(data);
      }
      return pars;
    }
  }
};
</script>