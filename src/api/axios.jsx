import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

// Request Interceptor (Task 3)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Task 4)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      alert("Unauthorized! Please login again.");
    }

    return Promise.reject(error);
  }
);