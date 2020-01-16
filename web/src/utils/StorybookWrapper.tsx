import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/App/theme";

type Props = {
  children: ReactElement;
};

export default ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
