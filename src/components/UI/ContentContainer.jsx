import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(36, 38, 33, 0.8);
  border: 1px solid #59584c;
  border-radius: 5px;
  padding: 20px;
`;

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentContainer;
