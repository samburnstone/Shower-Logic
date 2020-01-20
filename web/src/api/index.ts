const API_BASE_URL = process.env.REACT_APP_API_URL;

enum RequestMethod {
  GET = "GET",
  POST = "POST"
}

// TODO: throw error if http status >= 400 (not automatically done by fetch)
// Currently 404s won't cause upstream catch blocks to be triggered as the promise is resolving
// (rather than rejecting).
const simpleFetch = async (
  apiPath: string,
  method: RequestMethod = RequestMethod.GET
) =>
  fetch(`${API_BASE_URL}/${apiPath}`, {
    method: method
  });

const fetchAndProcessJSON = async (apiPath: string) => {
  const response = await simpleFetch(apiPath);
  return await response.json();
};

export default {
  getAllShowers: () => fetchAndProcessJSON("showers"),
  bookShower: (id: number) =>
    simpleFetch(`showers/${id}/book`, RequestMethod.POST)
};
