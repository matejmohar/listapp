export default {
  getAllCountries: state => state.countries,
  getFilter: state => state.filter,

  getFilteredCountries: state =>
    state.countries.filter(o => o.name.toLowerCase().includes(state.filter.toLowerCase()))
};
