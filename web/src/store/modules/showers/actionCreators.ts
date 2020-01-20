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

export const bookShower: (
  showerId: number
) => types.BookShowerAction = showerId => ({
  type: types.BOOK_SHOWER,
  payload: showerId
});

export const receivedShowerBook: (
  showerId: number
) => types.ReceivedBookShowerAction = (showerId: number) => ({
  type: types.RECEIVED_BOOK_SHOWER,
  payload: showerId
});
