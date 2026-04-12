import axios from 'axios';

const API_BASE_URL = 'https://seo-tools-hub-project-3.onrender.com/';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
