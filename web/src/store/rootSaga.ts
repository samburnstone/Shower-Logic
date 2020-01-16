import { all, fork } from "redux-saga/effects";
import { sagas as showersSagas } from "./modules/showers";

export default function* rootSaga() {
  yield all([...showersSagas].map(fork));
}
