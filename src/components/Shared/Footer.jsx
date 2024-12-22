import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: '#f5f5f5', marginTop: 4 }}>
      <Typography variant="body2">© 2024 Note Taking App. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
