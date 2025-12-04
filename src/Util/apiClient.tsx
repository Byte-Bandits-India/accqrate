"use client";
import axios from "axios";

// ✅ Environment-based API URL
// Development/Test Mode: http://localhost/api (via Traefik on port 80)
// Production Mode: https://prod.accqrate-erp.com/api
// Triggered by NEXT_PUBLIC_DOCKER_MODE=production OR NODE_ENV=production
const getApiUrl = () => {
    if (process.env.NEXT_PUBLIC_API_URL) {
        return process.env.NEXT_PUBLIC_API_URL;
    }

    const isProduction = 
        process.env.NEXT_PUBLIC_DOCKER_MODE === 'production' || 
        process.env.NODE_ENV === 'production';

    return isProduction
        ? "https://prod.accqrate-erp.com/api"
        : "http://localhost/api"; // Traefik on port 80
};

const API_URL = getApiUrl();

const apiClient = axios.create({
    baseURL: `${API_URL}/`,
});

apiClient.interceptors.request.use((config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("ACCOUNTING_USER") : null;

    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default apiClient;