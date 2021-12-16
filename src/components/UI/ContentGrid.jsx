import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const ContentGrid = ({ children }) => <Grid>{children}</Grid>;

export default ContentGrid;
