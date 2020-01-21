import { simpleFetch } from "../fetch";

describe("fetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("simpleFetch", () => {
    test("when http status is 200, the response is returned", async () => {
      const mockFetch = jest.fn();

      mockFetch.mockImplementation(() => {
        return {
          status: 200
        };
      });

      window.fetch = mockFetch;

      try {
        await simpleFetch("test");
      } catch (e) {
        fail();
      }
    });

    test("when http status is >= 400, an error is thrown", async () => {
      const mockFetch = jest.fn();

      mockFetch.mockImplementation(() => {
        return {
          status: 400
        };
      });

      window.fetch = mockFetch;

      expect.assertions(1);

      try {
        await simpleFetch("test");
      } catch (e) {
        const error = new Error("Request failed with status: 400");
        expect(e).toEqual(error);
      }
    });
  });
});
