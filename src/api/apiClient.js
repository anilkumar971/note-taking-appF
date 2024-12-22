import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8083/api', // Replace with your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
