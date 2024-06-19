// src/components/templates/LoginTemplate.tsx
import React from 'react';
import Login from '../../organisms/Login';
import { Container } from '@mui/material';

const LoginTemplate: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Login />
    </Container>
  );
};

export default LoginTemplate;
