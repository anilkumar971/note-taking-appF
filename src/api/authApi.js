/*import apiClient from './apiClient';

export const login = (credentials) => apiClient.post('/auth/login', credentials);

export const signup = (data) => apiClient.post('/auth/signup', data);*/


import apiClient from './apiClient';

export const signup = (data) => apiClient.post('/auth/signup', data);

export const login = (data) => apiClient.post('/auth/login', data);

export const verifyOTP = (otp) => apiClient.post('/auth/verify-otp', { otp });
