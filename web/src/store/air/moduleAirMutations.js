export default {
  SET_COUNTRIES(state, countries) {
    state.countries = countries.filter(o => o.name);
  },
  SET_FILTER(state, filter) {
    state.filter = filter;
  }
};
