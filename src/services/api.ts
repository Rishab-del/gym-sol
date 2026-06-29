import axios from "axios";

const api = axios.create({
  baseURL: "http://10.162.83.89:8000/api",
});

export default api;