import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const Image = styled.img`
  width: 341px;
  height: 192px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #59584c;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const GameScreenshots = ({ screenshots, gameName }) => {
  return (
    <Grid>
      {screenshots.map((screenItem) => (
        <Image src={screenItem.image} alt={gameName} key={screenItem.id} />
      ))}
    </Grid>
  );
};

GameScreenshots.propTypes = {
  screenshots: PropTypes.array.isRequired,
  gameName: PropTypes.string.isRequired,
};

export default GameScreenshots;
