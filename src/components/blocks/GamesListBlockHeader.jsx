import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SectionTitle from "components/UI/SectionTitle";
import SkeletonLine from "components/UI/SkeletonLine";
import GamesFilterBlock from "components/blocks/GamesFilterBlock";

const TitleWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  column-gap: 10px;
  margin-bottom: 20px;
`;

const GamesCountTitle = styled.div`
  display: grid;
  grid-template-columns: auto minmax(70px, auto);
  align-items: center;
  column-gap: 10px;
`;

const GamesListBlockHeader = ({ firstLoading, gamesCount }) => {
  return (
    <TitleWrapper>
      <SectionTitle>
        <GamesCountTitle>
          Games count:
          <span>
            {firstLoading ? (
              <SkeletonLine />
            ) : (
              gamesCount.toLocaleString("en-US")
            )}
          </span>
        </GamesCountTitle>
      </SectionTitle>
      <GamesFilterBlock />
    </TitleWrapper>
  );
};

export default GamesListBlockHeader;

GamesListBlockHeader.propTypes = {
  firstLoading: PropTypes.bool.isRequired,
  gamesCount: PropTypes.number,
};
