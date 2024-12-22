import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirects
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import NotesPage from './pages/NotesPage';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import './styles/Global.css';

// Mock authentication check (replace with actual logic)
const isAuthenticated = () => {
  // You can check user authentication status here (localStorage, context, etc.)
  return localStorage.getItem('userToken') !== null; // Example: checking if a token exists
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />; // Redirect to login if not authenticated
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/notes" element={<PrivateRoute element={<NotesPage />} />} />
        {/* Catch-all for unknown routes */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
