import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "components/Button";
import { selectors as queueSelectors } from "store/modules/queue";

const LargeText = styled.span`
  font-size: 2.2rem;
`;

export default () => (
  <>
    <h2>
      It's a bit busy... There are currently{" "}
      <LargeText>{useSelector(queueSelectors.getQueueCount)}</LargeText> people
      in the queue
    </h2>
    <Button>Get in line</Button>
  </>
);
