import * as types from "./types";

export const subscribeToQueueCountUpdates: () => types.SubscribeToQueueCountUpdatesAction = () => ({
  type: types.SUBSCRIBE_TO_QUEUE_COUNT_UPDATES
});

export const receivedQueueCountUpdate: (
  updateStatus: types.UpdateStatus
) => types.ReceivedQueueCountUpdateAction = updateStatus => ({
  type: types.RECEIVED_QUEUE_COUNT_UPDATE,
  payload: updateStatus
});
