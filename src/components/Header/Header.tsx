import React from 'react';
import styled from 'styled-components';

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

export default () => (
  <StyledHeader>
    <h1>Shower Logic</h1>
  </StyledHeader>
);
