import {
  ROUTE_GAMES,
  ROUTE_GENRES,
  ROUTE_HOME,
  ROUTE_SINGLE_GAME,
  ROUTE_SINGLE_GENRE,
} from "utils/constants";

import HomePage from "components/pages/HomePage";
import AllGamesContainer from "containers/AllGamesContainer";
import AllGenresContainer from "containers/AllGenresContainer";
import SingleGenreContainer from "containers/SingleGenreContainer";
import SingleGameContainer from "containers/SingleGameContainer";

export const routes = [
  {
    path: ROUTE_HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: ROUTE_GAMES,
    component: AllGamesContainer,
    exact: true,
  },
  {
    path: ROUTE_GENRES,
    component: AllGenresContainer,
    exact: true,
  },
  {
    path: ROUTE_SINGLE_GAME,
    component: SingleGameContainer,
    exact: false,
  },
  {
    path: ROUTE_SINGLE_GENRE,
    component: SingleGenreContainer,
    exact: false,
  },
];
