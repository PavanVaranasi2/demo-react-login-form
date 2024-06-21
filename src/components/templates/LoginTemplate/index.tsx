// src/components/templates/LoginTemplate/index.tsx
import React from 'react';
import Login from '../../organisms/Login';
import { Box, styled } from '@mui/material';

const PageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const LoginTemplate: React.FC = () => {
  return (
    <PageContainer>
      <Login />
    </PageContainer>
  );
};

export default LoginTemplate;
