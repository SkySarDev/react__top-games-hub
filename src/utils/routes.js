import * as routes from "utils/constants";

import HomePage from "components/pages/HomePage";
import AllGamesContainer from "containers/AllGamesContainer";
import AllGenresContainer from "containers/AllGenresContainer";
import SingleGenreContainer from "containers/SingleGenreContainer";
import SingleGameContainer from "containers/SingleGameContainer";
import AllPlatformsContainer from "containers/AllPlatformsContainer";
import AllDevelopersContainer from "containers/AllDevelopersContainer";
import SinglePlatformContainer from "containers/SinglePlatformContainer";
import SingleDeveloperContainer from "containers/SingleDeveloperContainer";
import AllPublishersContainer from "containers/AllPublishersContainer";
import SinglePublisherContainer from "containers/SinglePublisherContainer";
import GamesCalendarContainer from "containers/GamesCalendarContainer";

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
    path: routes.ROUTE_SINGLE_PLATFORM,
    component: SinglePlatformContainer,
    exact: false,
  },
  {
    path: routes.ROUTE_DEVELOPERS,
    component: AllDevelopersContainer,
    exact: true,
  },
  {
    path: routes.ROUTE_SINGLE_DEVELOPER,
    component: SingleDeveloperContainer,
    exact: false,
  },
  {
    path: routes.ROUTE_PUBLISHERS,
    component: AllPublishersContainer,
    exact: true,
  },
  {
    path: routes.ROUTE_SINGLE_PUBLISHER,
    component: SinglePublisherContainer,
    exact: false,
  },
  {
    path: routes.ROUTE_CALENDAR,
    component: GamesCalendarContainer,
    exact: true,
  },
  {
    path: routes.ROUTE_SINGLE_CALENDAR,
    component: GamesCalendarContainer,
    exact: false,
  },
];

export default routesList;
