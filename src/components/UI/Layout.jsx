import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: 1440px;
  padding: 15px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 310px auto;
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
