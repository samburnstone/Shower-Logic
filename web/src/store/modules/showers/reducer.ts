import { Shower, Status } from "types";
import * as types from "./types";

const initialState: Shower[] = [];

export default (state = initialState, action: types.ActionTypes) => {
  switch (action.type) {
    case types.RECEIVED_SHOWER_AVAILABILITY:
      return action.payload;
    case types.RECEIVED_BOOK_SHOWER:
      const newState = state.slice();
      return newState.map(shower => {
        // If we change the API to return the updated shower entity, then we could have a single
        // "UPDATE_SHOWER" reducer case for all book/mark-available/mark-out-of-use
        if (shower.id !== action.payload) {
          return shower;
        }
        return {
          ...shower,
          status: Status.inUse
        };
      });
    default:
      return state;
  }
};
