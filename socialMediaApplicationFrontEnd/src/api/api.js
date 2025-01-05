import axios from 'axios';

// Set up axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;