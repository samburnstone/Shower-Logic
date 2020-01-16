import React from "react";
import List from "./List";
import StorybookWrapper from "utils/StorybookWrapper";
import { Status, ShowersByStatus } from "types";

export default {
  title: "List",
  component: List
};

export const OneOfEach = () => {
  const showersByStatus: ShowersByStatus = {
    [Status.available]: [{ name: "Shower 1", status: Status.available }],
    [Status.inUse]: [{ name: "Shower 2", status: Status.inUse }],
    [Status.outOfUse]: [{ name: "Shower 3", status: Status.outOfUse }]
  };
  return (
    <StorybookWrapper>
      <List showersByStatus={showersByStatus} fetchShowers={jest.fn()} />
    </StorybookWrapper>
  );
};

export const OnlyAvailable = () => {
  const showersByStatus: ShowersByStatus = {
    [Status.available]: [{ name: "Shower 1", status: Status.available }],
    [Status.inUse]: [],
    [Status.outOfUse]: []
  };

  return (
    <StorybookWrapper>
      <List showersByStatus={showersByStatus} fetchShowers={jest.fn()} />
    </StorybookWrapper>
  );
};

export const None = () => {
  const showersByStatus: ShowersByStatus = {
    [Status.available]: [],
    [Status.inUse]: [],
    [Status.outOfUse]: []
  };
  return (
    <StorybookWrapper>
      <List showersByStatus={showersByStatus} fetchShowers={jest.fn()} />
    </StorybookWrapper>
  );
};
