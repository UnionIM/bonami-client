import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

const User = () => {
  const user = useSelector((state: RootState) => state.user);

  return <div>{user?.email}</div>;
};

export default User;
