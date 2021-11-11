import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Body = styled.div`
  background: rgba(36, 38, 33, 0.8);
  border: 1px solid #59584c;
  border-radius: 5px;
`;

const MainContentLayout = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default MainContentLayout;

MainContentLayout.propTypes = {
  title: PropTypes.string.isRequired,
};
