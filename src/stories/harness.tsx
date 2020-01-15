import React, { ReactElement } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../components/App/theme";
import rootReducer from "store/rootReducer";
import { RootState } from "store/types";

export default (
  component: ReactElement,
  state: RootState | undefined = undefined
) => {
  const store = createStore(rootReducer, state);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </Provider>
  );
};
