import React from 'react';

import AppStyles from './components/app/AppStyles';
import styled from 'styled-components';
import AppRouter from './components/app/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './assets/globalStyle/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper>
          <AppStyles />
          <AppRouter />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}
const AppWrapper = styled.div`
  margin: 0 10%;
`;
export default App;
