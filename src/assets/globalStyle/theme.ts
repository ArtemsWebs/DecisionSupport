import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    // Name of the component
    MuiDrawer: {
      styleOverrides: {
        // The props to change the default for.
        paper: () => ({ ...{ minWidth: '400px' } }), // No more ripple!
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // The props to change the default for.
        standard: () => ({ ...{ paddingLeft: '10px' } }), // No more ripple!
      },
    },
  },
});
