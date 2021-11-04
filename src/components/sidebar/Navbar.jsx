import React from "react";
import { NavLink } from "react-router-dom";
import * as routes from "utils/constants";
import styled from "styled-components";

const NavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    font-size: 24px;
    color: #d9ebe9;

    &.active,
    &:hover {
      color: #798f8c;
    }
  }
`;

const Navbar = () => {
  return (
    <ul>
      <NavItem>
        <NavLink to={routes.ROUTE_HOME} exact>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_GAMES} exact>
          Games
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_GENRES} exact>
          Genres
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_CALENDAR} exact>
          Calendar
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_PLATFORMS} exact>
          Platforms
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_DEVELOPERS} exact>
          Developers
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_PUBLISHERS} exact>
          Publishers
        </NavLink>
      </NavItem>
    </ul>
  );
};

export default Navbar;
