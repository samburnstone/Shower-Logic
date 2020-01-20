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
    [Status.available]: [{ id: 0, name: "Shower 1", status: Status.available }],
    [Status.inUse]: [{ id: 1, name: "Shower 2", status: Status.inUse }],
    [Status.outOfUse]: [{ id: 2, name: "Shower 3", status: Status.outOfUse }]
  };
  return (
    <StorybookWrapper>
      <List
        showersByStatus={showersByStatus}
        fetchShowers={jest.fn()}
        bookShower={jest.fn()}
      />
    </StorybookWrapper>
  );
};

export const OnlyAvailable = () => {
  const showersByStatus: ShowersByStatus = {
    [Status.available]: [{ id: 0, name: "Shower 1", status: Status.available }],
    [Status.inUse]: [],
    [Status.outOfUse]: []
  };

  return (
    <StorybookWrapper>
      <List
        showersByStatus={showersByStatus}
        fetchShowers={jest.fn()}
        bookShower={jest.fn()}
      />
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
      <List
        showersByStatus={showersByStatus}
        fetchShowers={jest.fn()}
        bookShower={jest.fn()}
      />
    </StorybookWrapper>
  );
};
