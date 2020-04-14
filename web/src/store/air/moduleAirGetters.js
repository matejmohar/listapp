export default {
  getAllCountries: state => state.countries,
  getFilter: state => filterType => {
    if (filterType == "Cities") {
      return state.filterCity;
    }
    return state.filterCountry;
  },

  getFilteredCountries: state =>
    state.countries.filter(o => o.name.toLowerCase().includes(state.filterCountry.toLowerCase())),

  getLatestMeasurements: state => state.latestMeasurements,
  getLatestMeasurementsForCity: state => city =>
    state.latestMeasurements.filter(o => o.city == city),
  getFilteredCities: state =>
    state.cities.filter(o => o.city.toLowerCase().includes(state.filterCity.toLowerCase())),

  getParameters: state => state.parameters,
  getParameterById: state => id => state.parameters.find(o => o.id == id)
};
