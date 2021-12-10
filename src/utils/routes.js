import * as routes from "utils/constants";

import HomeContent from "views/content/HomeContent";
import AllGamesContainer from "containers/AllGamesContainer";
import AllGenresContainer from "containers/AllGenresContainer";
import SingleGameContainer from "containers/SingleGameContainer";
import AllPlatformsContainer from "containers/AllPlatformsContainer";
import AllDevelopersContainer from "containers/AllDevelopersContainer";
import AllPublishersContainer from "containers/AllPublishersContainer";
import ReleaseCalendarContainer from "containers/ReleaseCalendarContainer";

const routesList = [
  {
    path: routes.ROUTE_HOME,
    element: <HomeContent />,
  },
  {
    path: "*",
    element: <HomeContent />,
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
    path: routes.ROUTE_RELEASE_CALENDAR,
    element: <ReleaseCalendarContainer />,
  },
  {
    path: routes.ROUTE_SINGLE_RELEASE_CALENDAR,
    element: <ReleaseCalendarContainer />,
  },
];

export default routesList;
