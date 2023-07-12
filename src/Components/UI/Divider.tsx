import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

interface IDivider {
  text?: string;
}

const Divider: FC<IDivider> = ({ text }) => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ flexWrap: "unset" }}
    >
      {text ? (
        <>
          <Box sx={{ width: "40%", height: "1px", bgcolor: "#A0A0A0" }} />
          <Typography sx={{ color: "#A0A0A0", m: "0 10px" }}>{text}</Typography>
          <Box sx={{ width: "40%", height: "1px", bgcolor: "#A0A0A0" }} />
        </>
      ) : (
        <Box sx={{ width: "100%", height: "1px", bgcolor: "#A0A0A0" }} />
      )}
    </Grid>
  );
};

export default Divider;
