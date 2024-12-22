import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import AuthService from './AuthService'; // Assuming you have an AuthService for login

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    AuthService.login(credentials)
      .then((response) => {
        // Assuming login is successful and sets a token or similar
        localStorage.setItem('userToken', response.token); // Save the token in localStorage (example)
        navigate('/notes'); // Redirect to /notes after successful login
      })
      .catch((err) => {
        setMessage('Login failed: ' + (err.message || 'Unknown error'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginPage;
