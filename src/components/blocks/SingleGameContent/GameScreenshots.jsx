import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SectionTitle from "components/UI/SectionTitle";
import SkeletonCardsCreator from "components/UI/SkeletonCardsCreator";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 192px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #59584c;
  background-color: #1b1b1b;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
  object-fit: cover;

  &:hover {
    opacity: 1;
  }
`;

const GameScreenshots = ({ isLoading, screenshots, gameName }) => {
  return (
    <>
      <SectionTitle top={20} bottom={10}>
        Screenshots
      </SectionTitle>
      <Grid>
        {isLoading ? (
          <SkeletonCardsCreator length={6} CardsComponent={ImageWrapper} />
        ) : (
          screenshots.map((screenItem) => (
            <ImageWrapper key={screenItem.id}>
              <Image src={screenItem.image} alt={gameName} />
            </ImageWrapper>
          ))
        )}
      </Grid>
    </>
  );
};

GameScreenshots.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  screenshots: PropTypes.array,
  gameName: PropTypes.string,
};

export default GameScreenshots;
