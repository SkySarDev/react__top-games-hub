import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: 1440px;
  padding: 15px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 1200px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 270px minmax(880px, auto);
  column-gap: 20px;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Grid>{children}</Grid>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
