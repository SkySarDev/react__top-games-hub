import * as routes from "utils/constants";

import HomePage from "components/pages/HomePage";
import AllGamesContainer from "containers/AllGamesContainer";
import AllGenresContainer from "containers/AllGenresContainer";
import SingleGenreContainer from "containers/SingleGenreContainer";
import SingleGameContainer from "containers/SingleGameContainer";
import AllPlatformsContainer from "containers/AllPlatformsContainer";
import AllDevelopersContainer from "containers/AllDevelopersContainer";

const routesList = [
  {
    path: routes.ROUTE_HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: routes.ROUTE_GAMES,
    component: AllGamesContainer,
    exact: true,
  },
  {
    path: routes.ROUTE_SINGLE_GAME,
    component: SingleGameContainer,
    exact: false,
  },
  {
    path: routes.ROUTE_GENRES,
    component: AllGenresContainer,
    exact: true,
  },
  {
    path: routes.ROUTE_SINGLE_GENRE,
    component: SingleGenreContainer,
    exact: false,
  },
  {
    path: routes.ROUTE_PLATFORMS,
    component: AllPlatformsContainer,
    exact: true,
  },
  {
    path: routes.ROUTE_DEVELOPERS,
    component: AllDevelopersContainer,
    exact: true,
  },
];

export default routesList;
