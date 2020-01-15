import React from "react";
import Queue from ".";
import StorybookWrapper from "utils/StorybookWrapper";
import { RootState } from "store/types";
import { Status } from "types";

export default {
  title: "Queue",
  component: Queue
};

export const Available = () => {
  const state: RootState = {
    queue: 0,
    showers: [{ name: "Shower 1", status: Status.available }]
  };
  return (
    <StorybookWrapper state={state}>
      <Queue />
    </StorybookWrapper>
  );
};

export const NotAvailable = () => {
  const state: RootState = {
    queue: 0,
    showers: []
  };
  return (
    <StorybookWrapper state={state}>
      <Queue />
    </StorybookWrapper>
  );
};
