import axios from "axios";

// 배포 : VITE_API_BASE_URL
// 로컬 : http://localhost:8080
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});
