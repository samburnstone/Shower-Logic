const API_BASE_URL = process.env.REACT_APP_API_URL;

export enum RequestMethod {
  GET = "GET",
  POST = "POST"
}

export const simpleFetch = async (
  apiPath: string,
  method: RequestMethod = RequestMethod.GET
) => {
  const res = await fetch(`${API_BASE_URL}/${apiPath}`, {
    method: method
  });

  const { status } = res;

  if (status >= 400) {
    throw new Error(`Request failed with status: ${status}`);
  }

  return res;
};

export const fetchAndProcessJSON = async (apiPath: string) => {
  const response = await simpleFetch(apiPath);
  return await response.json();
};
