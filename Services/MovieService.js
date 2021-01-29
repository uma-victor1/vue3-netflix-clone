import axios from "axios";
import key from "../env.js";

const serviceInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  Headers: { Accept: "application/json" },
  timeout: 10000
});
const imageServiceInstance = axios.create({
  baseURL: "https://image.tmdb.org/t/p",
  Headers: { Accept: "application/json" },
  timeout: 10000
});

export default {
  getPopularMovies() {
    return serviceInstance.get(`/movie/popular?api_key=${key.apiKey}`);
  },
  getBanner(imgLink) {
    return imageServiceInstance.get(imgLink);
  }
};
