import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { routes } from "utils/routes";
import { ROUTE_HOME } from "utils/constants";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
      <Redirect to={ROUTE_HOME} />
    </Switch>
  );
};

export default AppRouter;
