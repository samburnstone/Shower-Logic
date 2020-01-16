import { Shower } from "types";
import * as types from "./types";

const initialState: Shower[] = [];

export default (state = initialState, action: types.ActionTypes) => {
  switch (action.type) {
    case types.RECEIVED_SHOWER_AVAILABILITY:
      return action.payload;
    default:
      return state;
  }
};
