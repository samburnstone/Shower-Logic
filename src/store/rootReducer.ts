import { combineReducers } from "redux";
import showers from "./modules/showers";
import queue from "./modules/queue";

export default combineReducers({
  queue,
  showers
});
