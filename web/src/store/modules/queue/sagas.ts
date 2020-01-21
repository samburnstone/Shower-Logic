import { eventChannel, EventChannel } from "redux-saga";
import { call, put, take, takeEvery } from "redux-saga/effects";
import createSocketConnection from "store/modules/queue/createSocketConnection";
import { receivedQueueCountUpdate } from "./actionCreators";
import { SUBSCRIBE_TO_QUEUE_COUNT_UPDATES, UpdateStatus } from "./types";

const createSocketChannel = () => {
  return eventChannel<UpdateStatus>(emit => {
    createSocketConnection({
      onMessage: update => {
        emit(update);
      }
    });

    const unsubscribe = () => {
      // TODO
    };

    return unsubscribe;
  });
};

function* createWebsocketAndObserveEvents() {
  const socketChannel: EventChannel<UpdateStatus> = yield call(
    createSocketChannel
  );

  while (true) {
    try {
      const payload: UpdateStatus = yield take(socketChannel);

      const action = receivedQueueCountUpdate(payload);
      yield put(action);
    } catch (e) {
      console.error(e);
    }
  }
}

function* watchSubscribeToQueueUpdates() {
  yield takeEvery(
    SUBSCRIBE_TO_QUEUE_COUNT_UPDATES,
    createWebsocketAndObserveEvents
  );
}

export default [watchSubscribeToQueueUpdates];
