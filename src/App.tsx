import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./StyledComponents/MainAppTheme";
import Global from "./StyledComponents/Global";
import Header from "./Components/Header";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
