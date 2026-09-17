import axios from "axios";

// 배포 환경에서는 Vercel에 등록한 VITE_API_BASE_URL을, 로컬 개발 중에는
// 기본값인 http://localhost:8080(로컬 백엔드)을 사용합니다.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});
