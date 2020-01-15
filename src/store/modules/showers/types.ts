import { Shower } from "types";

export const FETCH_SHOWER_AVAILABLITY =
  "shower-logic/showers/FETCH_SHOWER_AVAILABILITY";
export const RECEIVED_SHOWER_AVAILABILITY =
  "shower-logic/showers/RECEIVED_SHOWER_AVAILABILITY";

export type FetchShowerAvailabilityAction = {
  type: typeof FETCH_SHOWER_AVAILABLITY;
};

export type ReceivedShowerAvailabilityAction = {
  type: typeof RECEIVED_SHOWER_AVAILABILITY;
  payload: Shower[];
};

export type ActionTypes =
  | FetchShowerAvailabilityAction
  | ReceivedShowerAvailabilityAction;
