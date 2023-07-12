import React, { FC } from "react";
import { styled } from "@mui/material";

const CustomLink = styled("a")({
  color: "#4541FF",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "unset",
  },
});

interface ILink {
  children: string;
  to: string;
}

const Link: FC<ILink> = ({ children, to }) => {
  return <CustomLink href={to}>{children}</CustomLink>;
};

export default Link;
