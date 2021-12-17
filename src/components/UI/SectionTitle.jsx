import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { MainTitle } from "components/UI/styles";

const Title = styled(MainTitle)`
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
