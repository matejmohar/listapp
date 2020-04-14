import Vuex from "vuex";
//import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";

import TopMenu from "@/components/TopMenu.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TopMenu.vue", () => {
  let store;
  beforeEach(() => {
    const air = {
      namespaced: true,
      state: {
        countries: [],
        filterCountry: "",
        filterCity: "",

        latestMeasurements: [],
        cities: [],
        parameters: []
      },
      getters: {
        getFilter: state => filterType => {
          if (filterType == "Cities") {
            return state.filterCity;
          }
          return state.filterCountry;
        }
      },
      mutations: {
        SET_FILTER_CITY(state, filter) {
          state.filterCity = filter;
        },
        SET_FILTER_COUNTRY(state, filter) {
          state.filterCountry = filter;
        }
      }
    };

    store = new Vuex.Store({
      modules: {
        air: air
      }
    });
  });

  it("renders 'go back' arrow", () => {
    //const router = new VueRouter();

    const wrapper = mount(TopMenu, {
      mocks: {
        $route: {
          meta: {
            type: "Cities"
          }
        }
      },
      localVue,
      store
    });

    expect(wrapper.contains(".go-back")).toBe(true);
  });
  it("does not render 'go back' arrow", () => {
    //const router = new VueRouter();

    const wrapper = mount(TopMenu, {
      mocks: {
        $route: {
          meta: {
            type: "Countries"
          }
        }
      },
      localVue,
      store
    });

    expect(wrapper.contains(".go-back")).toBe(false);
  });

  it("has a placeholder for cities", () => {
    const wrapper = mount(TopMenu, {
      mocks: {
        $route: {
          meta: {
            type: "Cities"
          }
        }
      },
      localVue,
      store
    });

    expect(wrapper.find(".filtering").attributes("placeholder")).toBe(
      "Start typing to find your city"
    );
  });

  it("commits mutation on text input, with type Countries (uppercase)", async () => {
    store.commit = jest.fn();
    const wrapper = mount(TopMenu, {
      mocks: {
        $route: {
          meta: {
            type: "Countries"
          }
        }
      },
      localVue,
      store
    });
    wrapper.find(".filtering").trigger("input");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledWith("air/SET_FILTER_COUNTRY", "", undefined);
  });

  it("commits mutation on text input, with type countries (lowercase)", async () => {
    store.commit = jest.fn();
    const wrapper = mount(TopMenu, {
      mocks: {
        $route: {
          meta: {
            type: "countries"
          }
        }
      },
      localVue,
      store
    });
    wrapper.find(".filtering").trigger("input");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledWith("air/SET_FILTER_COUNTRY", "", undefined);
  });
  it("commits mutation on text input, with type cities", async () => {
    store.commit = jest.fn();
    const wrapper = mount(TopMenu, {
      mocks: {
        $route: {
          meta: {
            type: "cities"
          }
        }
      },
      localVue,
      store
    });
    wrapper.find(".filtering").trigger("input");
    await wrapper.vm.$nextTick();

    expect(store.commit).toHaveBeenCalledWith("air/SET_FILTER_CITY", "", undefined);
  });
});
