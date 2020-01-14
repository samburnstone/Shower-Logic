import { createSelector } from 'reselect';
import { RootState } from 'store/types';
import { Status } from 'types';

const getShowers = (state: RootState) => state.showers;

export const getShowersByStatus = createSelector(
  [getShowers],
  (showers) => {
    const initial: { [key in Status]: [] } = {
      [Status.available]: [],
      [Status.inUse]: [],
      [Status.outOfUse]: []
    }

    return showers.reduce((acc, shower) => ({
      ...acc,
      [shower.status]: [...acc[shower.status], shower]
    }), initial);
  }
);