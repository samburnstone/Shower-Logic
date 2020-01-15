import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectors as queueSelectors } from 'store/modules/queue'
import media from 'utils/media';

const StyledDiv = styled.div`
  background: ${props => props.theme.brown};
  color: ${props => props.theme.white};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${media.small} {
    flex-direction: column;
    text-align: center;
  }
`

const LargeText = styled.span`
  font-size: 2.2rem;
`

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: ${props => props.theme.white}
  font-size: 1rem;
  align-self: center;
  cursor: pointer;
  align-self: center;
  ${media.small} {
    flex-direction: column;
  }
`

export default () => (
  <StyledDiv>
    <h2>
      There are currently
      {' '}
      <LargeText>
        {useSelector(queueSelectors.getQueueCount)}
      </LargeText>
      {' '}
      people in the queue</h2>
    <StyledButton>Get in line</StyledButton>
  </StyledDiv>
);
