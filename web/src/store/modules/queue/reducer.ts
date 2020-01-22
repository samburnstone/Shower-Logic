import * as types from "./types";

const initialState: types.QueueState = {};

export default (state = initialState, action: types.ActionTypes) => {
  switch (action.type) {
    case types.RECEIVED_QUEUE_COUNT_UPDATE:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};
