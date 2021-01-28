import axios from "axios";

const serviceInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  Headers: { Accept: 'application/json' },
  timeout: 10000
});
