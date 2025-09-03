import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c5cb0',
    },
    secondary: {
      main: '#E6E6FA',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"PT Sans", sans-serif',
  },
});

export default theme;
