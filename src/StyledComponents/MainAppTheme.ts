import { createTheme } from "@mui/material";

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
          "#outlined-adornment-password": {
            padding: "11px 17px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
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

export default theme;
