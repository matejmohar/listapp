<template>
	<div id="app">
		<top-menu></top-menu>
		<router-view />
	</div>
</template>
<script>
//modules
import moduleAir from "@/store/air/moduleAir.js";

//components
import TopMenu from "@/components/TopMenu.vue";

//mapper
import { mapActions } from "vuex";

export default {
	components: {
		TopMenu,
	},
	methods: {
		...mapActions("air", ["getCountries"]),
	},
	created() {
		this.$store.registerModule("air", moduleAir);

		this.getCountries()
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>

<style lang="scss">
@import "src/assets/css/main.scss";
</style>
