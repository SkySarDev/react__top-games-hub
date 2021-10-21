import {
  ROUTE_GAMES,
  ROUTE_GENRES,
  ROUTE_HOME,
  ROUTE_SINGLE_GENRE,
} from "utils/constants";

import HomePage from "components/pages/HomePage";
import AllGamesContainer from "containers/AllGamesContainer";
import AllGenresContainer from "containers/AllGenresContainer";
import SingleGenreContainer from "containers/SingleGenreContainer";

export const routes = [
  {
    path: ROUTE_HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: ROUTE_GAMES,
    component: AllGamesContainer,
    exact: false,
  },
  {
    path: ROUTE_GENRES,
    component: AllGenresContainer,
    exact: true,
  },
  {
    path: ROUTE_SINGLE_GENRE,
    component: SingleGenreContainer,
    exact: false,
  },
];
