import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SectionTitle from "components/UI/SectionTitle";
import SkeletonLine from "components/UI/SkeletonLine";

const Description = styled.div`
  max-height: 350px;
  overflow-y: hidden;
`;

const GameDescription = ({ isLoading, description_raw, description }) => {
  return (
    <div>
      <SectionTitle bottom={10}>Description</SectionTitle>
      <Description>
        {isLoading
          ? Array.from({ length: 10 }, (_, i) => (
              <SkeletonLine margin={"0 0 8px 0"} key={i} />
            ))
          : description_raw || description}
      </Description>
    </div>
  );
};

export default GameDescription;

GameDescription.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  description_raw: PropTypes.string,
  description: PropTypes.string,
};
