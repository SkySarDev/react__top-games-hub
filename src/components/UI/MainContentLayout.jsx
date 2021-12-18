import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ContentContainer from "components/UI/ContentContainer";

const Wrapper = styled.div`
  position: relative;
  margin-top: 250px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px #1b1b1b;
  margin: 0 0 15px 20px;
`;

const MainContentLayout = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  );
};

export default MainContentLayout;

MainContentLayout.propTypes = {
  title: PropTypes.string.isRequired,
};
