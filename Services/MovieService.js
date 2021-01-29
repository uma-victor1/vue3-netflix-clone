import axios from "axios";
import key from "../env";

const serviceInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  Headers: { Accept: "application/json" },
  timeout: 10000
});

export default {
  getPopularMovies() {
    return serviceInstance.get(`/movie/popular?api_key=${key.apiKey}`);
  }
};
