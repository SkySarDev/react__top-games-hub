import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTE_GAMES, ROUTE_GENRES, ROUTE_HOME } from "utils/constants";

import Layout from "components/UI/Layout";
import HomePage from "components/pages/HomePage";
import GamesPage from "components/pages/GamesPage";
import GenresPage from "components/pages/GenresPage";
import Sidebar from "components/sidebar/Sidebar";

function App() {
  return (
    <Layout>
      <Sidebar />
      <Switch>
        <Route path={ROUTE_HOME} component={HomePage} exact />
        <Route path={ROUTE_GAMES} component={GamesPage} />
        <Route path={ROUTE_GENRES} component={GenresPage} />
      </Switch>
    </Layout>
  );
}

export default App;
