import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders app name", () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/Shower Logic/i);
  expect(appTitle).toBeInTheDocument();
});
