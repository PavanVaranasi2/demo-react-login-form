import React from "react";
import { Box, styled } from "@mui/material";
import Login from "../../components/organisms/Login";

const PageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const LoginPage: React.FC = () => {
  return (
    <PageContainer>
      <Login />
    </PageContainer>
  );
};

export default LoginPage;
