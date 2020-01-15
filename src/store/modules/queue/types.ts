export const SUBSCRIBE_TO_QUEUE_COUNT_UPDATES = 'shower-logic/queue/SUBSCRIBE_TO_QUEUE_UPDATES';
export const RECEIVED_QUEUE_COUNT_UPDATE = 'shower-logic/queue/RECEIVED_QUEUE_COUNT_UPDATE';

export type SubscribeToQueueCountUpdatesAction = {
  type: typeof SUBSCRIBE_TO_QUEUE_COUNT_UPDATES
};

export type ReceivedQueueCountUpdateAction = {
  type: typeof RECEIVED_QUEUE_COUNT_UPDATE;
  payload: number
};

export type QueueState = {
  count: number
};

export type ActionTypes = SubscribeToQueueCountUpdatesAction | ReceivedQueueCountUpdateAction;

