// src/components/molecules/LoginForm/index.tsx
import React from 'react';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import { Checkbox, FormControlLabel, Link, IconButton, Typography, styled, InputAdornment } from '@mui/material';
import MailOutline from '@mui/icons-material/MailOutline';
import LockOutlined from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface LoginFormProps {
  onLogin: () => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  toggleShowPassword: () => void;
  showPassword: boolean;
  email: string;
  password: string;
  remember: boolean;
  setRemember: (remember: boolean) => void;
  error: string;
  successMessage: string;
}

const LoginFormContainer = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6),
  border: `1.5px solid ${theme.palette.primary.main}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

const OptionsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: theme.spacing(2)
}));

const StyledFormControlLabel = styled(FormControlLabel)({
  marginTop: '10px'
});

const MessageTypography = styled(Typography)(({ theme, color }) => ({
  color: color === 'error' ? theme.palette.error.main : theme.palette.success.main,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2)
}));

const LoginForm = ({
  onLogin,
  setEmail,
  setPassword,
  toggleShowPassword,
  showPassword,
  email,
  password,
  remember,
  setRemember,
  error,
  successMessage
}: LoginFormProps) => {
  const fields = [
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <MailOutline />
          </InputAdornment>
        )
      }
    },
    {
      id: 'password',
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <LockOutlined />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }
    }
  ];

  return (
    <LoginFormContainer noValidate autoComplete="off" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
      {fields.map(field => (
        <TextField
          key={field.id}
          label={field.label}
          type={field.type}
          value={field.value}
          onChange={field.onChange}
          required
          InputProps={field.InputProps}
        />
      ))}
      {error && <MessageTypography color="error">{error}</MessageTypography>}
      {successMessage && <MessageTypography color="success">{successMessage}</MessageTypography>}
      <OptionsContainer>
        <StyledFormControlLabel
          control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
          label="Remember me"
        />
        <Link href="#" variant="body2">Forgot Password?</Link>
      </OptionsContainer>
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </LoginFormContainer>
  );
};

export default LoginForm;
