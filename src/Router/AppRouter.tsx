import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import BonamiController from "../Server/Controller/BonamiController";

const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    BonamiController.getUser()
      .then((r) => {
        dispatch({ type: "SET_USER", payload: r });
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          dispatch({ type: "SET_USER", payload: null });
        }
      });
  }, []);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="/login" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
