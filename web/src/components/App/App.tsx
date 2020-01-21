import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Header from "components/Header";
import MainContent from "components/MainContent";
import store from "store";
import theme from "./theme";

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Header />
      <MainContent />
    </ThemeProvider>
  </Provider>
);

export default App;
