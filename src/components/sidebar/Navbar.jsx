import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_GAMES, ROUTE_GENRES, ROUTE_HOME } from "utils/constants";
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
        <NavLink to={ROUTE_HOME} exact>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={ROUTE_GAMES}>Games</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={ROUTE_GENRES}>Genres</NavLink>
      </NavItem>
    </ul>
  );
};

export default Navbar;
