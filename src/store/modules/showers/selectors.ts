import { createSelector } from 'reselect';
import { RootState } from 'store/types';
import { Shower, Status } from 'types';

const getShowers = (state: RootState) => state.showers;

type ShowerStatus = {
  [key in Status]: Shower[]
}

export const getShowersByStatus = createSelector(
  [getShowers],
  (showers) => {
    const initial: ShowerStatus = {
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

export const getIsShowerAvailable = createSelector(
  [getShowersByStatus],
  ({ available }) => available.length !== 0 
);
