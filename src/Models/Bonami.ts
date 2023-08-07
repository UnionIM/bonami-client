import React from "react";
import { AlertColor } from "@mui/material";

export interface ISelect {
  value: string;
  display: React.ReactNode;
}

export interface IAlert {
  isOpen: boolean;
  message: string;
  severity: AlertColor;
}
