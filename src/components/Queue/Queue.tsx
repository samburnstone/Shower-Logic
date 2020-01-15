import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectors as showerSelectors } from 'store/modules/showers';
import media from 'utils/media';
import NoShowersAvailable from './NoShowersAvailable';
import ShowerAvailable from './ShowerAvailable';

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

export default () => {
  const isShowerAvailable = useSelector(showerSelectors.getIsShowerAvailable);
  return (
    <StyledDiv>
      {isShowerAvailable ? <ShowerAvailable /> : <NoShowersAvailable />}
    </StyledDiv>
  );
}
