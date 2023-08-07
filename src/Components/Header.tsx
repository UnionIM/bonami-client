import React, { ChangeEvent, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Logo, uaFlag, ukFlag, ShoppingCart } from "../Images/Vector";
import { Searchbar, MySelect, LanguageSelectElement } from "./UI";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import BonamiController from "../Server/Controller/BonamiController";

const languageSelect = [
  {
    value: "ua",
    display: <LanguageSelectElement img={uaFlag} text={"Ua"} />,
  },
  {
    value: "en",
    display: <LanguageSelectElement img={ukFlag} text={"En"} />,
  },
];

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [select, setSelect] = useState<string>("ua");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.user);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const logOutHandler = () => {
    setIsLoading(true);
    BonamiController.logOut()
      .then((res) => {
        if (res.message === "success") {
          setIsLoading(false);
          window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Box maxHeight={"64px"}>
      <AppBar position={"static"}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"0 35px"}
          width={"unset"}
          sx={{ height: "64px", flexWrap: "unset" }}
        >
          <Grid container width={"unset"}>
            <Box maxHeight={"32px"} textAlign={"center"} marginRight={"50px"}>
              <Link to={"/"}>
                <img src={Logo} alt="Bonami" />
              </Link>
            </Box>
            <Link to={"/products"}>
              <Typography>Products</Typography>
            </Link>
          </Grid>
          <Searchbar
            maxWidth={500}
            placeholder={"Search in all categories..."}
            value={searchValue}
            onChange={searchHandler}
          />
          <Grid container width={"unset"} gap={"25px"}>
            <MySelect
              selectState={select}
              setSelectState={setSelect}
              selectList={languageSelect}
            ></MySelect>
            <Box>
              <img src={ShoppingCart} alt="Cart" />
            </Box>
            {user ? (
              <Grid
                container
                gap={"5px"}
                alignItems={"center"}
                sx={{ width: "unset" }}
              >
                <Typography>{user.email}</Typography>{" "}
                {isLoading ? (
                  <CircularProgress color={"inherit"} />
                ) : (
                  <Button onClick={logOutHandler} color={"inherit"}>
                    Log out
                  </Button>
                )}
              </Grid>
            ) : (
              <Link to={"/login"}>
                <Typography>Log in</Typography>
              </Link>
            )}
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
