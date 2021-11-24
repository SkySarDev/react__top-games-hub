import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GameCard from "components/cards/GameCard";
import GamesFilterBlock from "components/blocks/GamesFilterBlock";
import SectionTitle from "components/UI/SectionTitle";

const GamesListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const TitleGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  margin-bottom: 20px;
`;

const GamesListBlock = ({ gamesList, games_count }) => {
  return (
    <>
      <TitleGrid>
        <SectionTitle>
          Games count: <span>{games_count}</span>
        </SectionTitle>

        <GamesFilterBlock />
      </TitleGrid>

      <GamesListGrid>
        {gamesList.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </GamesListGrid>
    </>
  );
};

GamesListBlock.propTypes = {
  gamesList: PropTypes.array.isRequired,
  games_count: PropTypes.number.isRequired,
};

export default GamesListBlock;
