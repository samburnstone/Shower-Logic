import { all, fork } from "redux-saga/effects";
import { sagas as showersSagas } from "./modules/showers";
import { sagas as queueSagas } from "./modules/queue";

export default function* rootSaga() {
  yield all([...showersSagas, ...queueSagas].map(fork));
}
