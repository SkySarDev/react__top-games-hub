import React from "react";
import styled from "styled-components";

import Navbar from "components/blocks/sidebar/Navbar";
import Searchbar from "components/blocks/sidebar/Searchbar";

import logo from "images/logo.png";

const SidebarWrapper = styled.div`
  position: sticky;
  top: 15px;
  text-align: center;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  opacity: 0.7;
`;

const Sidebar = () => {
  return (
    <div>
      <SidebarWrapper>
        <Logo src={logo} alt="Top Games Hub Logo" />
        <Searchbar />
        <Navbar />
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;
