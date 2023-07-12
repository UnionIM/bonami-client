import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./StyledComponents/MainAppTheme";
import Global from "./StyledComponents/Global";
import Header from "./Components/Header";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={"#f1f1f1"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Global />
        <Header />
        <AppRouter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
