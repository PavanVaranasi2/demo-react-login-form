// src/components/organisms/Login.tsx
import React from 'react';
import LoginForm from '../../molecules/LoginForm';
import { Box, Typography } from '@mui/material';

const Login: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h1" gutterBottom>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default Login;
