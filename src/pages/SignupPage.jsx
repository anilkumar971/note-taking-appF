import React from 'react';
import SignupForm from '../components/Auth/SignupForm';
import { Box } from '@mui/material';

const SignupPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <SignupForm />
    </Box>
  );
};

export default SignupPage;
