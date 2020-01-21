import React from "react";
import styled from "styled-components";
import media from "utils/media";
import NoShowersAvailable from "./NoShowersAvailable";
import { DispatchProps, StateProps } from "./QueueContainer";

type Props = DispatchProps & StateProps;

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
`;

export default ({ addToQueue, isShowerAvailable, queueCount }: Props) => (
  <StyledDiv>
    {isShowerAvailable ? (
      <h2>A shower is available</h2>
    ) : (
      <NoShowersAvailable addToQueue={addToQueue} queueCount={queueCount} />
    )}
  </StyledDiv>
);
