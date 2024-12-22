import axios from 'axios';

const API_URL = 'http://localhost:8083/api/auth'; // Replace with your backend URL

class AuthService {
  // Sign up a new user
  signup(userData) {
    return axios.post(`${API_URL}/signup`, userData)
      .then(response => response.data)
      .catch(error => {
        console.error('Signup error:', error);
        throw error.response ? error.response.data : error;
      });
  }

  // Log in a user
  login(credentials) {
    return axios.post(`${API_URL}/login`, credentials)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(error => {
        console.error('Login error:', error);
        throw error.response ? error.response.data : error;
      });
  }

  // Log out the user
  logout() {
    localStorage.removeItem('user');
  }

  // Get the currently logged-in user
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
