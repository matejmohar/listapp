import Vuex from "vuex";
//import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";

import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
  let store;
  beforeEach(() => {
    const air = {
      namespaced: true,
      state: {
        countries: []
      },
      getters: {
        getAllCountries: state => state.countries
      },
      actions: {
        fetchCountries({ commit }) {
          throw new Error("API Error");
        }
      }
    };

    store = new Vuex.Store({
      modules: {
        air: air
      }
    });
  });

  it("does show Can not load countries, please try again :( if data can not load", async () => {
    const wrapper = mount(Home, {
      localVue,
      store
    });
    expect(wrapper.find(".before-load-info").isVisible()).toBe(true);
    expect(wrapper.find(".before-load-info").text()).toBe(
      "Can not load countries, please try again :("
    );
  });
});
