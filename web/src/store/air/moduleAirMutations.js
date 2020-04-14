export default {
  SET_COUNTRIES(state, countries) {
    state.countries = countries.filter(o => o.name);
  },
  SET_FILTER_CITY(state, filter) {
    state.filterCity = filter;
  },
  SET_FILTER_COUNTRY(state, filter) {
    state.filterCountry = filter;
  },
  SET_LATEST_MEASUREMENTS(state, latestMeasurements) {
    state.latestMeasurements = latestMeasurements;
  },
  SET_CITIES(state, cities) {
    state.cities = cities;
  },
  SET_PARAMETERS(state, parameters) {
    state.parameters = parameters;
  },
  CLEAR_PREVIOUS_COUNTRY(state) {
    state.latestMeasurements = [];
    state.cities = [];
    state.filterCity = "";
  }
};
