import axios from "axios";

export const API_URL = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default API_URL;
