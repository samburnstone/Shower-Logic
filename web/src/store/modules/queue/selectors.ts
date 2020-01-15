import { RootState } from "store/types";

const getQueueState = (state: RootState) => state.queue;

export const getQueueCount = (state: RootState) => getQueueState(state);
