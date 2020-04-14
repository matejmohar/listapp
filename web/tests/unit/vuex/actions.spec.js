import actions from "@/store/air/moduleAirActions.js";
import axios from "@/axios.js";

let url = "";
let mockError = false;

jest.mock("@/axios.js", () => ({
  create: () => "https://api.openaq.org/v1",
  get: _url => {
    return new Promise(resolve => {
      if (mockError) throw Error("Mock error");

      url = _url;
      resolve({
        data: {
          meta: {
            page: 1,
            limit: 200,
            found: 1
          },
          results: {
            test: "ok"
          }
        }
      });
    });
  }
}));

describe("AIR_ACTIONS", () => {
  it("fetches countries", async () => {
    const commit = jest.fn();

    await actions.fetchCountries({ commit });
    expect(url).toBe("/countries?limit=200");
    expect(commit).toHaveBeenCalledWith("SET_COUNTRIES", { test: "ok" });
  });

  it("fetches latest measurements for country", async () => {
    const commit = jest.fn();

    await actions.fetchLatestMeasurementsForCountry({ commit }, "AU");
    expect(url).toBe("/latest?limit=1000&country=AU&page=1");
    expect(commit).toHaveBeenCalledWith("SET_LATEST_MEASUREMENTS", [{ test: "ok" }]);
  });

  it("fetches locations for country", async () => {
    const commit = jest.fn();

    await actions.fetchLocationsForCountry({ commit }, "AU");
    expect(url).toBe("/cities?limit=1000&country=AU&page=1");
    expect(commit).toHaveBeenCalledWith("SET_CITIES", [{ test: "ok" }]);
  });

  it("fetches locations for country", async () => {
    const commit = jest.fn();

    await actions.fetchParameters({ commit }, "AU");
    expect(url).toBe("/parameters");
    expect(commit).toHaveBeenCalledWith("SET_PARAMETERS", { test: "ok" });
  });
});
