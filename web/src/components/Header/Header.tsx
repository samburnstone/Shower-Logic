import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(0.5rem + 2vmin);
  color: ${props => props.theme.white};
`;

export default () => (
  <StyledHeader>
    <h1>Shower Logic</h1>
  </StyledHeader>
);
