// src/components/atoms/Button.tsx
import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '50px', 
  height: '50px'
}));

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
