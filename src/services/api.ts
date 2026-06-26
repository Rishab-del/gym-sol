import axios from "axios";

const api = axios.create({
  baseURL: "http://10.26.148.89:8000/api",
});

export default api;