import React, { ChangeEvent, useState } from "react";
import { AppBar, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../Images/Vector/Logo.svg";
import Searchbar from "./UI/Searchbar";
import MySelect from "./UI/MySelect";
import uaFlag from "../Images/Vector/Ua.svg";
import ukFlag from "../Images/Vector/Uk.svg";
import LanguageSelectElement from "./UI/LanguageSelectElement";
import ShoppingCart from "../Images/Vector/ShoppingCart.svg";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [select, setSelect] = useState<string>("ua");

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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

            {
              <Link to={"/login"}>
                <Typography>Log in</Typography>
              </Link>
            }
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
