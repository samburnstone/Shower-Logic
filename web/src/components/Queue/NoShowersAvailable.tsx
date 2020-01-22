import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import { UpdateStatus } from "store/modules/queue/types";

type Props = {
  addToQueue: () => void;
  queueStatus?: UpdateStatus;
};

const LargeText = styled.span`
  font-size: 2.2rem;
`;

export default ({ addToQueue, queueStatus }: Props) =>
  queueStatus === undefined ? (
    <>
      <h2>It's a bit busy at the moment. Do you want to get in the queue?</h2>
      <Button onClick={addToQueue}>Yes please</Button>
    </>
  ) : (
    <>
      <h2>
        You're{" "}
        <LargeText>
          {queueStatus.position} of {queueStatus.length}
        </LargeText>{" "}
        at the moment
      </h2>
      {/* TODO: add ability to leave the queue */}
    </>
  );
