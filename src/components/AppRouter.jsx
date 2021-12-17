import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import routes from "utils/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path={"*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRouter;
