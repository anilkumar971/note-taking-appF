import React, { useState } from 'react';
import AuthService from './AuthService';

const SignupForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.signup(formData)
      .then(() => setMessage('Signup successful!'))
      .catch(err => setMessage(err.message || 'Signup failed.'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignupForm;
