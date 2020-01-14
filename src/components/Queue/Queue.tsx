import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props => props.theme.brown};
  color: ${props => props.theme.white};
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const LargeText = styled.span`
  font-size: 2.2rem;
`

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: ${props => props.theme.white}
  font-size: 1rem;
  align-self: center;
  cursor: pointer;
`

export default () => (
  <StyledDiv>
    <h2>There are currently <LargeText>3</LargeText> people in the queue</h2>
    <StyledButton>Get in line</StyledButton>
  </StyledDiv>
);
