import React from "react";
import styled from "styled-components";
import Sidebar from "components/sidebar/Sidebar";

const Container = styled.div`
  max-width: 1440px;
  padding: 15px;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 310px auto;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Inner>
        <Sidebar />
        {children}
      </Inner>
    </Container>
  );
};

export default Layout;
