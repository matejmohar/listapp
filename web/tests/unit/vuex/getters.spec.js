import getters from "@/store/air/moduleAirGetters.js";

describe("AIR_GETTERS", () => {
  const state = {
    countries: [
      { code: "AD", count: 118982, locations: 3, cities: 2, name: "Andorra" },
      { code: "AE", count: 78163, locations: 4, cities: 3, name: "United Arab Emirates" },
      { code: "AF", count: 7641, locations: 2, cities: 2, name: "Afghanistan" }
    ],
    filterCountry: "Andorr",
    filterCity: "Kabul",

    latestMeasurements: [
      {
        location: "Kabul",
        city: "N/A",
        country: "AF",
        distance: 12262659.912134236,
        measurements: [
          {
            parameter: "pm25",
            value: 21,
            lastUpdated: "2020-04-13T13:30:00.000Z",
            unit: "µg/m³",
            sourceName: "AirNow",
            averagingPeriod: { value: 1, unit: "hours" }
          }
        ]
      },
      {
        location: "US Diplomatic Post: Kabul",
        city: "Kabul",
        country: "AF",
        distance: 12264637.672302365,
        measurements: [
          {
            parameter: "pm25",
            value: 21,
            lastUpdated: "2020-04-13T14:30:00.000Z",
            unit: "µg/m³",
            sourceName: "StateAir_Kabul",
            averagingPeriod: { value: 1, unit: "hours" }
          }
        ]
      }
    ],
    cities: [
      { country: "AF", name: "Kabul", city: "Kabul", count: 4183, locations: 1 },
      { country: "AF", name: "N/A", city: "N/A", count: 3458, locations: 1 }
    ],
    parameters: [
      { id: "bc", name: "BC", description: "Black Carbon", preferredUnit: "µg/m³" },
      { id: "co", name: "CO", description: "Carbon Monoxide", preferredUnit: "ppm" }
    ]
  };
  it("returns all countries", () => {
    const actual = getters.getAllCountries(state);
    expect(actual).toEqual(state.countries);
  });

  it("returns country filter", () => {
    const actual = getters.getFilter(state)("Countries");
    expect(actual).toEqual("Andorr");
  });
  it("returns city filter", () => {
    const actual = getters.getFilter(state)("Cities");
    expect(actual).toEqual("Kabul");
  });

  it("returns filtered countries", () => {
    const actual = getters.getFilteredCountries(state);
    expect(actual).toEqual([state.countries[0]]);
  });
  it("returns latest measurements", () => {
    const actual = getters.getLatestMeasurements(state);
    expect(actual).toEqual(state.latestMeasurements);
  });

  it("returns latest measurements for city", () => {
    const actual = getters.getLatestMeasurementsForCity(state)("Kabul");
    expect(actual).toEqual([state.latestMeasurements[1]]);
  });
  it("returns filtered cities", () => {
    const actual = getters.getFilteredCities(state);
    expect(actual).toEqual([state.cities[0]]);
  });
  it("returns all parameters", () => {
    const actual = getters.getParameters(state);
    expect(actual).toEqual(state.parameters);
  });
  it("returns parameter by id", () => {
    const actual = getters.getParameterById(state)("bc");
    expect(actual).toEqual(state.parameters[0]);
  });
});
