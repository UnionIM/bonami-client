import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";

interface ILanguageSelectElement {
  text: string;
  img: string;
}

const LanguageSelectElement: FC<ILanguageSelectElement> = ({ text, img }) => {
  return (
    <Grid container>
      <Typography sx={{ mr: "5px", lineHeight: "unset" }}>
        {text.toUpperCase()}
      </Typography>
      <img src={img} alt={`${img}`} />
    </Grid>
  );
};

export default LanguageSelectElement;
