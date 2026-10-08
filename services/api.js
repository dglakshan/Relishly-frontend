import axios from "axios";

// Access Vite environment variables directly via import.meta.env
const API_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://relishly-backend.onrender.com/api";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
