import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-top: ${({ top }) => (top ? top + "px" : 0)};
  margin-bottom: ${({ bottom }) => (bottom ? bottom + "px" : 0)};

  span {
    color: #999999;
  }
`;

const SectionTitle = ({ top, bottom, children }) => {
  return (
    <Title top={top} bottom={bottom}>
      {children}
    </Title>
  );
};

SectionTitle.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
};

export default SectionTitle;
