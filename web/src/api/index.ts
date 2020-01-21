import { fetchAndProcessJSON, simpleFetch, RequestMethod } from "./fetch";

export default {
  getAllShowers: () => fetchAndProcessJSON("showers"),
  bookShower: (id: number) =>
    simpleFetch(`showers/${id}/book`, RequestMethod.POST)
};
