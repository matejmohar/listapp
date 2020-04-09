import axios from "@/axios.js";

export default {
	getCountries() {
		return new Promise((resolve, reject) => {
			axios
				.get("/countries?limit=200")
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},
};
