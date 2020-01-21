import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Header from "components/Header";
import MainContent from "components/MainContent";
import store from "store";
import theme from "./theme";
import createSocketConnection from "api/createSocketConnection";

const App: React.FC = () => {
  useEffect(() => {
    createSocketConnection();
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <MainContent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
