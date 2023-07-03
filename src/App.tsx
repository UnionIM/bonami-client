import React from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import AppRouter from "./Router/AppRouter";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: #B5B5B5;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #808080;
  }
`;

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `Roboto`,
      fontSize: 16,
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
    palette: {
      primary: { main: "#573618" },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            ".MuiInputBase-input": {
              padding: "0",
            },
            ".MuiInputBase-root": {
              padding: "0",
            },
            ".MuiOutlinedInput-input": {
              padding: "11px 17px",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "0",
            ".MuiList-root": {
              padding: "0",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
