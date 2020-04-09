import axios from "axios";

const baseUrl = "https://api.openaq.org/v1";

const instance = axios.create({
	baseURL: baseUrl,
});
export default instance;
