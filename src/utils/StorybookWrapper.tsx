import React, { ReactElement } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../components/App/theme";
import rootReducer from "store/rootReducer";
import { RootState } from "store/types";

type Props = {
  state: RootState | undefined;
  children: ReactElement;
};

export default ({ state = undefined, children }: Props) => {
  const store = createStore(rootReducer, state);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
