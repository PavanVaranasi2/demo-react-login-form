// src/components/organisms/Login/index.tsx
import React, { useState } from "react";
import LoginForm from "../../molecules/LoginForm";
import { Box, Typography, styled } from "@mui/material";
import { checkUser } from "../../../utils/dummyUsers"; // Make sure this utility is correctly implemented and imported

const LoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Centers horizontally in a column flex container
  justifyContent: "center", // Centers vertically in a column flex container
  height: "100vh", // Takes full viewport height to center the form in the viewport
  padding: theme.spacing(2), // Adds some padding around
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4), // Ensures some space below the heading
  textAlign: "center", // Ensures text is centered if Typography width is not full
}));

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and Password are required");
      setSuccessMessage("");
      return;
    }
    if (checkUser(email, password)) {
      setSuccessMessage("User exists");
      setError("");
    } else {
      setError("User does not exist");
      setSuccessMessage("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <StyledTypography variant="h1" gutterBottom>
        Login
      </StyledTypography>
      <LoginForm
        onLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        toggleShowPassword={toggleShowPassword}
        showPassword={showPassword}
        email={email}
        password={password}
        remember={remember}
        setRemember={setRemember}
        error={error}
        successMessage={successMessage}
      />
    </LoginContainer>
  );
};

export default Login;
