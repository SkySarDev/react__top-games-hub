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
        <NavLink to={routes.ROUTE_HOME}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_GAMES}>Games</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_GENRES}>Genres</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_CALENDAR}>Calendar</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_PLATFORMS}>Platforms</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_DEVELOPERS}>Developers</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ROUTE_PUBLISHERS}>Publishers</NavLink>
      </NavItem>
    </ul>
  );
};

export default Navbar;
