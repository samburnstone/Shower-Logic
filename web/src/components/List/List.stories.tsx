import React from "react";
import List from ".";
import StorybookWrapper from "utils/StorybookWrapper";
import { RootState } from "store/types";
import { Status } from "types";

export default {
  title: "List",
  component: List
};

export const OneOfEach = () => {
  const state: RootState = {
    queue: 0,
    showers: [
      { name: "Shower 1", status: Status.available },
      { name: "Shower 2", status: Status.inUse },
      { name: "Shower 3", status: Status.outOfUse }
    ]
  };
  return (
    <StorybookWrapper state={state}>
      <List />
    </StorybookWrapper>
  );
};

export const OnlyAvailable = () => {
  const state: RootState = {
    queue: 0,
    showers: [{ name: "Shower 1", status: Status.available }]
  };
  return (
    <StorybookWrapper state={state}>
      <List />
    </StorybookWrapper>
  );
};

export const None = () => {
  const state: RootState = {
    queue: 0,
    showers: []
  };
  return (
    <StorybookWrapper state={state}>
      <List />
    </StorybookWrapper>
  );
};
