// src/components/atoms/TextField.tsx
import { TextField as MuiTextField, TextFieldProps, styled } from '@mui/material';

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  width: '100%', 
  margin: theme.spacing(1) 
}));

const TextField: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField {...props} />;
};

export default TextField;
