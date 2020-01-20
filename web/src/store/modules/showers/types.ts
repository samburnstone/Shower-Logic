import { Action } from "redux";
import { Shower } from "types";

export const FETCH_SHOWER_AVAILABLITY =
  "shower-logic/showers/FETCH_SHOWER_AVAILABILITY";
export const RECEIVED_SHOWER_AVAILABILITY =
  "shower-logic/showers/RECEIVED_SHOWER_AVAILABILITY";

export const BOOK_SHOWER = "shower-logic/showers/BOOK_SHOWER";
export const RECEIVED_BOOK_SHOWER = "shower-logic/showers/RECEIVED_BOOK_SHOWER";

export interface FetchShowerAvailabilityAction extends Action {
  type: typeof FETCH_SHOWER_AVAILABLITY;
}

export interface ReceivedShowerAvailabilityAction extends Action {
  type: typeof RECEIVED_SHOWER_AVAILABILITY;
  payload: Shower[];
}

export interface BookShowerAction extends Action {
  type: typeof BOOK_SHOWER;
  payload: Shower["id"];
}

export interface ReceivedBookShowerAction extends Action {
  type: typeof RECEIVED_BOOK_SHOWER;
  payload: Shower["id"];
}

export type ActionTypes =
  | FetchShowerAvailabilityAction
  | ReceivedShowerAvailabilityAction
  | BookShowerAction
  | ReceivedBookShowerAction;
