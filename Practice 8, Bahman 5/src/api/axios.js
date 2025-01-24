import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3010", // Server base URL
});

// Automatically include the token in requests if it's in localStorage
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
