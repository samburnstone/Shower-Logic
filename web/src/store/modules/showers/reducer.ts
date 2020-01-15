import { Shower, Status } from "types";
import * as types from "./types";

const initialState: Shower[] = [
  {
    name: "Floor 1",
    status: Status.available
  },
  {
    name: "Floor 4",
    status: Status.available
  },
  {
    name: "Floor 6",
    status: Status.inUse
  }
];

export default (state = initialState, action: types.ActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
