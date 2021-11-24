import * as routes from "utils/constants";

import HomePage from "components/pages/HomePage";
import AllGamesContainer from "containers/AllGamesContainer";
import AllGenresContainer from "containers/AllGenresContainer";
import SingleGameContainer from "containers/SingleGameContainer";
import AllPlatformsContainer from "containers/AllPlatformsContainer";
import AllDevelopersContainer from "containers/AllDevelopersContainer";
import AllPublishersContainer from "containers/AllPublishersContainer";
import GamesCalendarContainer from "containers/GamesCalendarContainer";

const routesList = [
  {
    path: routes.ROUTE_HOME,
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: routes.ROUTE_GAMES,
    element: <AllGamesContainer />,
  },
  {
    path: routes.ROUTE_SINGLE_GAME,
    element: <SingleGameContainer />,
  },
  {
    path: routes.ROUTE_GENRES,
    element: <AllGenresContainer />,
  },
  {
    path: routes.ROUTE_PLATFORMS,
    element: <AllPlatformsContainer />,
  },
  {
    path: routes.ROUTE_DEVELOPERS,
    element: <AllDevelopersContainer />,
  },
  {
    path: routes.ROUTE_PUBLISHERS,
    element: <AllPublishersContainer />,
  },
  {
    path: routes.ROUTE_CALENDAR,
    element: <GamesCalendarContainer />,
  },
  {
    path: routes.ROUTE_SINGLE_CALENDAR,
    element: <GamesCalendarContainer />,
  },
];

export default routesList;
