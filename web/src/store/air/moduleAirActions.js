import axios from "@/axios.js";

export default {
  async fetchCountries({ commit }) {
    let result = await axios.get("/countries?limit=200");
    commit("SET_COUNTRIES", result.data.results);
  },
  async fetchLatestMeasurementsForCountry({ commit }, countryCode) {
    let measurements = [];
    let page = 1;
    let result = null;
    //gets all measurements for selected country
    do {
      result = await axios.get(`/latest?limit=1000&country=${countryCode}&page=${page}`);
      measurements = measurements.concat(result.data.results);
      page++;
    } while (
      result != null &&
      result.data.meta.page * result.data.meta.limit < result.data.meta.found
    );
    commit("SET_LATEST_MEASUREMENTS", measurements);
  },
  async fetchLocationsForCountry({ commit }, countryCode) {
    let locations = [];
    let page = 1;
    let result = null;

    //gets all locations for selected country
    do {
      result = await axios.get(`/cities?limit=1000&country=${countryCode}&page=${page}`);
      locations = locations.concat(result.data.results);
      page++;
    } while (
      result != null &&
      result.data.meta.page * result.data.meta.limit < result.data.meta.found
    );

    commit("SET_CITIES", locations);
  },
  async fetchParameters({ commit }) {
    let result = await axios.get("/parameters");
    commit("SET_PARAMETERS", result.data.results);
  }
};
