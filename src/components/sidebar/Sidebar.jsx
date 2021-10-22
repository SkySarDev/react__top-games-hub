import React from "react";
import styled from "styled-components";

import Navbar from "components/sidebar/Navbar";

const SidebarContainer = styled.div`
  position: sticky;
  top: 15px;
`;

const Sidebar = () => {
  return (
    <div>
      <SidebarContainer>
        <div style={{ width: 150, height: 70, fontSize: 30 }}>LOGO</div>
        <div
          style={{
            width: 150,
            height: 100,
            border: "1px solid #d9ebe9",
            borderRadius: 5,
            marginBottom: 30,
          }}
        >
          User Panel
        </div>
        <Navbar />
      </SidebarContainer>
      <div />
    </div>
  );
};

export default Sidebar;
