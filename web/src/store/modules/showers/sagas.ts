import { call, put, takeEvery } from "redux-saga/effects";
import api from "api";
import { receivedShowerAvailability } from "./actionCreators";
import { FETCH_SHOWER_AVAILABLITY } from "./types";

function* fetchShowerAvailability() {
  try {
    const showers = yield call(api.getAllShowers);
    const action = receivedShowerAvailability(showers);
    yield put(action);
  } catch {
    console.error("Failed request!");
  }
}

function* watchFetchShowerAvailability() {
  yield takeEvery(FETCH_SHOWER_AVAILABLITY, fetchShowerAvailability);
}

export default [watchFetchShowerAvailability];
