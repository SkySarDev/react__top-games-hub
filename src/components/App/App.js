import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "components/Menu/Menu";
import Games from "components/Games";

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route path={"/"} component={Games} exact />
        <Route path={"/games/:genre"} component={Games} />
      </Switch>
    </>
  );
}

export default App;
