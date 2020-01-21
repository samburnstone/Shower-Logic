import React from "react";
import styled from "styled-components";
import Button from "components/Button";

type Props = {
  addToQueue: () => void;
  queueCount: number;
};

const LargeText = styled.span`
  font-size: 2.2rem;
`;

export default ({ addToQueue, queueCount }: Props) => (
  <>
    <h2>
      It's a bit busy... There are currently <LargeText>{queueCount}</LargeText>{" "}
      people in the queue
    </h2>
    <Button onClick={addToQueue}>Get in line</Button>
  </>
);
