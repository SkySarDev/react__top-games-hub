import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GameCard from "components/cards/GameCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const GamesListGrid = ({ gamesList }) => {
  return (
    <Grid>
      {gamesList.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </Grid>
  );
};

GamesListGrid.propTypes = {
  gamesList: PropTypes.array.isRequired,
};

export default GamesListGrid;
