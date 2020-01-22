import { RootState } from "store/types";
import { UpdateStatus } from "./types";

const getQueueState = (state: RootState) => state.queue;

export const getQueueStatus = (state: RootState): UpdateStatus | undefined =>
  getQueueState(state).status;
