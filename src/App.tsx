import React from 'react';
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import { createGlobalStyle } from "styled-components";

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
      primary: {main: '#573618'},
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Global/>
    </ThemeProvider>
  );
}

export default App;
