import { RootState } from "store/types";

const getQueueState = (state: RootState) => state.queue;

export const getQueueCount = (state: RootState): number =>
  getQueueState(state).length;
export const getQueuePosition = (state: RootState): number =>
  getQueueState(state).position;
