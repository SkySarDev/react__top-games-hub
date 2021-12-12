import * as routes from "utils/constants";

import HomeContent from "views/content/HomeContent";
import AllGamesContainer from "containers/AllGamesContainer";
import SingleGameContainer from "containers/SingleGameContainer";
import ReleaseCalendarContainer from "containers/ReleaseCalendarContainer";
import CategoriesContainer from "containers/CategoriesContainer";

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
    element: <CategoriesContainer />,
  },
  {
    path: routes.ROUTE_PLATFORMS,
    element: <CategoriesContainer />,
  },
  {
    path: routes.ROUTE_DEVELOPERS,
    element: <CategoriesContainer />,
  },
  {
    path: routes.ROUTE_PUBLISHERS,
    element: <CategoriesContainer />,
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
