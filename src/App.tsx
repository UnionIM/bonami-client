import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./StyledComponents/MainAppTheme";
import Global from "./StyledComponents/Global";
import Header from "./Components/Header";
import AppRouter from "./Router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./Store/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
