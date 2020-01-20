import { call, put, takeEvery } from "redux-saga/effects";
import api from "api";
import {
  receivedShowerAvailability,
  receivedShowerBook
} from "./actionCreators";
import {
  FETCH_SHOWER_AVAILABLITY,
  BookShowerAction,
  BOOK_SHOWER
} from "./types";

function* fetchShowerAvailability() {
  try {
    const showers = yield call(api.getAllShowers);
    const action = receivedShowerAvailability(showers);
    yield put(action);
  } catch {
    console.error("Failed request!");
  }
}

function* bookShower({ payload: showerId }: BookShowerAction) {
  try {
    yield call(api.bookShower, showerId);
    const action = receivedShowerBook(showerId);
    yield put(action);
  } catch {
    console.error("Failed request!");
  }
}

function* watchFetchShowerAvailability() {
  yield takeEvery(FETCH_SHOWER_AVAILABLITY, fetchShowerAvailability);
}

function* watchBookShower() {
  yield takeEvery(BOOK_SHOWER, bookShower);
}

export default [watchFetchShowerAvailability, watchBookShower];
