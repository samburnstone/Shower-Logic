import * as types from "./types";

const initialState: types.QueueState = {
  position: 0,
  length: 0
};

export default (state = initialState, action: types.ActionTypes) => {
  switch (action.type) {
    case types.RECEIVED_QUEUE_COUNT_UPDATE:
      return action.payload;
    default:
      return state;
  }
};
