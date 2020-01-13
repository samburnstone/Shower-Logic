import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(0px + 2vmin);
  color: white;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <h1>Shower Logic</h1>
        <input type="text" />
      </StyledHeader>
    </StyledApp>
  );
}

export default App;
