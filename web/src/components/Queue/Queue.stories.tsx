import React from "react";
import StorybookWrapper from "utils/StorybookWrapper";
import Queue from "./Queue";

export default {
  title: "Queue",
  component: Queue
};

export const Available = () => (
  <StorybookWrapper>
    <Queue addToQueue={() => {}} isShowerAvailable queueCount={0} />
  </StorybookWrapper>
);

export const NotAvailableQueueCount0 = () => (
  <StorybookWrapper>
    <Queue addToQueue={() => {}} isShowerAvailable={false} queueCount={0} />
  </StorybookWrapper>
);

export const NotAvailableQueueCount2 = () => (
  <StorybookWrapper>
    <Queue addToQueue={() => {}} isShowerAvailable={false} queueCount={2} />
  </StorybookWrapper>
);
