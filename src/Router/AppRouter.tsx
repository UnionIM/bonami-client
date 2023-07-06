import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
