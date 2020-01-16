const API_BASE_URL = process.env.REACT_APP_API_URL;

const fetchAndProcessJSON = async (apiPath: string) => {
  const response = await fetch(`${API_BASE_URL}/${apiPath}`);
  return await response.json();
};

export default {
  getAllShowers: () => fetchAndProcessJSON("showers")
};
