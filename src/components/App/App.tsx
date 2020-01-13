import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
