import { Shower } from "types";
import * as types from "./types";

export const fetchShowerAvailability: () => types.FetchShowerAvailabilityAction = () => ({
  type: types.FETCH_SHOWER_AVAILABLITY
});

export const receivedShowerAvailability: (
  showers: Shower[]
) => types.ReceivedShowerAvailabilityAction = showers => ({
  type: types.RECEIVED_SHOWER_AVAILABILITY,
  payload: showers
});
