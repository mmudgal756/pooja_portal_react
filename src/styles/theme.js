import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#87CEEB',
    },
    secondary: {
      main: '#E6E6FA',
    },
    background: {
      default: '#F0F8FF',
    },
  },
  typography: {
    fontFamily: '"PT Sans", sans-serif',
  },
});

export default theme;
