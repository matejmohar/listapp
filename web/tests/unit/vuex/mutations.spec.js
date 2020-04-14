import mutations from "@/store/air/moduleAirMutations.js";

describe("AIR_MUTATIONS", () => {
  it("adds a country to the state", () => {
    const countries = [
      {
        code: "SI",
        name: "Slovenia"
      }
    ];
    const state = {
      countries: []
    };
    mutations.SET_COUNTRIES(state, countries);

    expect(state).toEqual({
      countries: [
        {
          code: "SI",
          name: "Slovenia"
        }
      ]
    });
  });
  it("filters out country without name", () => {
    const countries = [
      {
        code: "SI",
        name: "Slovenia"
      },
      {
        code: "AU",
        name: ""
      }
    ];
    const state = {
      countries: []
    };
    mutations.SET_COUNTRIES(state, countries);

    expect(state).toEqual({
      countries: [
        {
          code: "SI",
          name: "Slovenia"
        }
      ]
    });
  });
  it("clears previous country data", () => {
    const latestMeasurements = [
      {
        code: "SI",
        name: "Slovenia"
      }
    ];
    const cities = [
      {
        name: "City 1"
      },
      {
        name: "City 2"
      }
    ];
    const filterCity = "Cit";
    const state = {
      latestMeasurements,
      cities,
      filterCity
    };
    mutations.CLEAR_PREVIOUS_COUNTRY(state);

    expect(state).toEqual({
      latestMeasurements: [],
      cities: [],
      filterCity: ""
    });
  });
  it("sets city filter", () => {
    const filterCity = "City";
    const state = {
      filterCity: ""
    };
    mutations.SET_FILTER_CITY(state, filterCity);

    expect(state).toEqual({
      filterCity: "City"
    });
  });
  it("sets country filter", () => {
    const filterCountry = "Country";
    const state = {
      filterCountry: ""
    };
    mutations.SET_FILTER_COUNTRY(state, filterCountry);

    expect(state).toEqual({
      filterCountry: "Country"
    });
  });
  it("sets latest measurements", () => {
    const latestMeasurements = [
      {
        city: "City 1",
        country: "AG"
      },
      {
        city: "City 2",
        country: "AG"
      }
    ];
    const state = {
      latestMeasurements: []
    };
    mutations.SET_LATEST_MEASUREMENTS(state, latestMeasurements);

    expect(state).toEqual({
      latestMeasurements: [
        {
          city: "City 1",
          country: "AG"
        },
        {
          city: "City 2",
          country: "AG"
        }
      ]
    });
  });
  it("sets cities", () => {
    const cities = [
      {
        name: "City 1",
        city: "City 1"
      }
    ];
    const state = {
      cities: []
    };
    mutations.SET_CITIES(state, cities);

    expect(state).toEqual({
      cities: [
        {
          name: "City 1",
          city: "City 1"
        }
      ]
    });
  });
  it("sets parameters", () => {
    const parameters = [
      {
        id: "bc",
        name: "BC"
      }
    ];
    const state = {
      parameters: []
    };
    mutations.SET_PARAMETERS(state, parameters);

    expect(state).toEqual({
      parameters: [
        {
          id: "bc",
          name: "BC"
        }
      ]
    });
  });
});
