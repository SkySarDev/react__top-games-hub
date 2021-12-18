import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { navbarList } from "utils/navbarList";

import ContentContainer from "components/UI/ContentContainer";

const NavList = styled.ul`
  width: 160px;
  margin: 0 auto;
  text-align: left;
`;

const NavItem = styled.li`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  column-gap: 10px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  a {
    font-size: 24px;
    color: #e2e0d0;
    transition: color 0.3s;

    &.active,
    &:hover {
      color: #999999;
    }
  }
`;

const NavIcon = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.7;
`;

const Navbar = () => {
  return (
    <ContentContainer>
      <NavList>
        {navbarList.map((navItem) => {
          const { link, name, icon } = navItem;

          return (
            <NavItem key={name}>
              <NavIcon src={icon} alt={name} />
              <NavLink to={link}>{name}</NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </ContentContainer>
  );
};

export default Navbar;
