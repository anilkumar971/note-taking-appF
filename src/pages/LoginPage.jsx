import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import { Box } from '@mui/material';

const LoginPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
