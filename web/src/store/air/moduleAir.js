import state from "./moduleAirState.js";
import mutations from "./moduleAirMutations.js";
import actions from "./moduleAirActions.js";
import getters from "./moduleAirGetters.js";

export default {
	namespaced: true,
	state: state,
	mutations: mutations,
	actions: actions,
	getters: getters
};
