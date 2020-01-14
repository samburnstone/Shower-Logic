import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import MainContent from 'components/MainContent';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
