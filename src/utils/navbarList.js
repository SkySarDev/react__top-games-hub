import * as routes from "utils/constants";

import home from "images/icons/home.svg";
import games from "images/icons/games.svg";
import genres from "images/icons/genres.svg";
import tags from "images/icons/tags.svg";
import calendar from "images/icons/calendar.svg";
import platforms from "images/icons/platforms.svg";
import developers from "images/icons/developers.svg";
import publishers from "images/icons/publishers.svg";

export const navbarList = [
  { link: routes.ROUTE_ROOT, name: "Home page", icon: home },
  { link: routes.ROUTE_GAMES, name: "All games", icon: games },
  { link: routes.ROUTE_GENRES, name: "Genres", icon: genres },
  { link: routes.ROUTE_TAGS, name: "Game tags", icon: tags },
  {
    link: routes.ROUTE_RELEASE_CALENDAR,
    name: "Release calendar",
    icon: calendar,
  },
  { link: routes.ROUTE_PLATFORMS, name: "Platforms", icon: platforms },
  { link: routes.ROUTE_DEVELOPERS, name: "Developers", icon: developers },
  { link: routes.ROUTE_PUBLISHERS, name: "Publishers", icon: publishers },
];
