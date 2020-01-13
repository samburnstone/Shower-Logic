import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: ${props => props.theme.blue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.white};
`;

const theme = {
  blue: '#065172',
  white: '#F3F3F3'
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledHeader>
          <h1>Shower Logic</h1>
        </StyledHeader>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
