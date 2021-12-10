import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GameCardSkeleton from "components/cards/GameCardSkeleton";
import GameCard from "components/cards/GameCard";

const GamesListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const GamesListBlockBody = ({ isLoading, results }) => {
  return (
    <GamesListGrid>
      {isLoading
        ? Array.from({ length: 15 }, (_, i) => <GameCardSkeleton key={i} />)
        : results.map((game) => <GameCard key={game.id} {...game} />)}
    </GamesListGrid>
  );
};

GamesListBlockBody.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  results: PropTypes.array,
};

export default GamesListBlockBody;
