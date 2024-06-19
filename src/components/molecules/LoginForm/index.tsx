// src/components/molecules/LoginForm.tsx
import React, { useState } from 'react';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import { Box, Checkbox, FormControlLabel, Link, IconButton, Typography } from '@mui/material';
import { checkUser } from '../../../utils/dummyUsers';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutline from '@mui/icons-material/MailOutline';
import LockOutlined from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const classes = {
  loginForm: {width: '100%', maxWidth: 400, mx: 'auto', backgroundColor: 'rgb(255, 255, 255, 0.1)', p: '50px', border: '1.5px solid white'},
  rememberForget: {display: 'flex', justifyContent: 'space-between', width: '100%', m: '10px'},
  submitbtn: {borderRadius: '50px', height: '50px'}
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }

    if (checkUser(email, password)) {
      alert('User exists');
    } else {
      alert('User does not exist');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) {
      setError('');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box 
      component="form" 
      noValidate 
      autoComplete="off" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      sx={classes.loginForm}
    >
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutline />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
        required
        InputProps={{
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
          ),
        }}
      />
      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1, mb: 2 }}>
          {error}
        </Typography>
      )}
      <Box sx={classes.rememberForget}>
        <FormControlLabel
          control={
            <Checkbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
          }
          label="Remember me"
        />
        <Link href="#" variant="body2" sx={{mt: '10px'}}>
          Forgot Password?
        </Link>
      </Box>
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth sx={classes.submitbtn}>
        Login {/* this is contained button with primary color */}
      </Button>
    </Box>
  );
};

export default LoginForm;