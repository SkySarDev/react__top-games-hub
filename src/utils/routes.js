import { ROUTE_GAMES, ROUTE_GENRES, ROUTE_HOME } from "utils/constants";

import HomePage from "components/pages/HomePage";
import GamesPage from "components/pages/GamesPage";
import GenresPage from "components/pages/GenresPage";

export const routes = [
  {
    path: ROUTE_HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: ROUTE_GAMES,
    component: GamesPage,
    exact: false,
  },
  {
    path: ROUTE_GENRES,
    component: GenresPage,
    exact: false,
  },
];
