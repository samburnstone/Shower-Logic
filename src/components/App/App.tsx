import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import List from 'components/List';
import { Status } from 'types';
import theme from './theme';

const showers = [
  {
    name: 'Floor 1',
    status: Status.available
  },
  {
    name: 'Floor 4',
    status: Status.available
  },
  {
    name: 'Floor 6',
    status: Status.inUse
  }
]

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <List items={showers}/>
    </ThemeProvider>
  );
}

export default App;
