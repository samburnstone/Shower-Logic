import * as types from './types';

export const subscribeToQueueCountUpdates: () => types.SubscribeToQueueCountUpdatesAction = () => ({
  type: types.SUBSCRIBE_TO_QUEUE_COUNT_UPDATES
});

export const receivedQueueCountUpdate: (count: number) => types.ReceivedQueueCountUpdateAction = (showers) => ({
  type: types.RECEIVED_QUEUE_COUNT_UPDATE,
  payload: showers
});
