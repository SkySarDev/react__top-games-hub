import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from "utils/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default AppRouter;
