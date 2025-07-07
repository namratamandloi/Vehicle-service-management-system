import axios from "axios";
import { getToken } from "./auth"; // Adjust the import path as necessary

export const BASE_URL = "http://localhost:8080/api";

export const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Include credentials in requests
});

myAxios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

