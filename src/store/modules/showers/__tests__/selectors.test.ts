import * as selectors from '../selectors';
import { Shower, Status } from 'types';
import { RootState } from 'store/types';

describe('Showers selectors', () => {
  describe('getShowersByStatus', () => {
    test('it returns object with empty array as values when no shower data', () => {
      const showers: Shower[] = [];

      const state: RootState = {
        showers
      };

      const expected = {
        [Status.available]: [],
        [Status.inUse]: [],
        [Status.outOfUse]: []
      };

      expect(selectors.getShowersByStatus(state)).toEqual(expected);
    });

    test('it returns an object keyed by status when single object', () => {
      const showers: Shower[] = [
        { name: 'Shower 1', status: Status.available }
      ];

      const state: RootState = {
        showers
      };

      const expected = {
        [Status.available]: [
          { name: 'Shower 1', status: Status.available }
        ],
        [Status.inUse]: [],
        [Status.outOfUse]: []
      };

      expect(selectors.getShowersByStatus(state)).toEqual(expected);
    });

    test('it returns an object keyed by status when multiple objects', () => {
      const showers: Shower[] = [
        { name: 'Shower 1', status: Status.available },
        { name: 'Shower 2', status: Status.inUse },
        { name: 'Shower 3', status: Status.available }
      ];

      const state: RootState = {
        showers
      }

      const expected = {
        [Status.available]: [
          { name: 'Shower 1', status: Status.available },
          { name: 'Shower 3', status: Status.available }
        ],
        [Status.inUse]: [
          { name: 'Shower 2', status: Status.inUse },
        ],
        [Status.outOfUse]: []
      };

      expect(selectors.getShowersByStatus(state)).toEqual(expected);
    });
  });
});
