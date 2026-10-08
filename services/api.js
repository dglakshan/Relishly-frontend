import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.VUE_APP_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
