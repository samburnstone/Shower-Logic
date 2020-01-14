import { Shower } from "types";
import * as types from './types';

const initialState: Shower[] = [];

export default (state = initialState, action: types.ActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
}