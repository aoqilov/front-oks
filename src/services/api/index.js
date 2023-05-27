import axios from "axios";
import storage from "services/storage";

const api = axios.create({
	baseURL: 'https://api.horunxon.uz/api/v1/admin',
	timeout: 30000 
});

api.defaults.params = {};
api.defaults.params["_f"] = "json";
api.defaults.params["author_id"] = 140;
api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Cache-Control"] = "no-cache";
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

api.interceptors.request.use(
	configs => {
		const token = storage.get('token') || "";
		if (token) {
			configs.headers.Authorization = `Bearer ${token}`;
		}
		return configs;
	},
	error => {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error);
	}
);

export default api;
