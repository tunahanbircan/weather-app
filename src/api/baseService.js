import axios from "axios";
import { API_URL, API_KEY } from "../env/config";

export const baseService = {
  fetchByCityName: async (cityName) => {
    return axios.get(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`);
  },
};
