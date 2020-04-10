import axios from "@/axios.js";

export default {
  fetchCountries({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/countries?limit=200")
        .then(response => {
          commit("SET_COUNTRIES", response.data.results);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
