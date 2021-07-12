import axios from "axios";
const apiKey = 'fbb0c92eb459272c7afd323360fb1146'
console.log(apiKey)
const serviceInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  Headers: { Accept: "application/json" },
  timeout: 10000
});

export default {
  getPopularMovies() {
    return serviceInstance.get(`/movie/popular?api_key=${apiKey}`);
  },
  getTrendingMovies() {
    return serviceInstance.get(`/trending/movie/week?api_key=${apiKey}`);
  },
  getTopMovies() {
    return serviceInstance.get(`/movie/top_rated?api_key=${apiKey}`);
  }
};
