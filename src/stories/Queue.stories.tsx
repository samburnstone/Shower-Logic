import React from "react";
import Queue from "../components/Queue";
import harness from "./harness";
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
  return harness(<Queue />, state);
};

export const NotAvailable = () => {
  const state: RootState = {
    queue: 0,
    showers: []
  };
  return harness(<Queue />, state);
};
