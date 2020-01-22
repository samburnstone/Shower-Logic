import React from "react";
import StorybookWrapper from "utils/StorybookWrapper";
import Queue from "./Queue";

export default {
  title: "Queue",
  component: Queue
};

export const Available = () => (
  <StorybookWrapper>
    <Queue addToQueue={() => {}} isShowerAvailable />
  </StorybookWrapper>
);

export const NotAvailableQueueCount0 = () => (
  <StorybookWrapper>
    <Queue
      addToQueue={() => {}}
      isShowerAvailable={false}
      queueStatus={{
        length: 0,
        position: 0
      }}
    />
  </StorybookWrapper>
);

export const NotAvailableQueueCount2 = () => (
  <StorybookWrapper>
    <Queue
      addToQueue={() => {}}
      isShowerAvailable={false}
      queueStatus={{
        position: 0,
        length: 2
      }}
    />
  </StorybookWrapper>
);
