import * as types from "./types";

const initialState: types.QueueState = 0;

export default (state = initialState, action: types.ActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
