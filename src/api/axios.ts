import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((config) => {
  return config;
});

export default instance;