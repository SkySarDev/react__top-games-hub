import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import SectionTitle from "components/UI/SectionTitle";
import GamesFilterBlock from "components/blocks/GamesFilterBlock";
import GameCard from "components/cards/GameCard";

const Container = styled.div`
  padding: 20px;
`;

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

const GamesListContent = ({ title, games_count, results }) => {
  return (
    <MainContentLayout title={title}>
      <Container>
        <TitleGrid>
          <SectionTitle>
            Games count: <span>{games_count.toLocaleString("en-US")}</span>
          </SectionTitle>
          <GamesFilterBlock />
        </TitleGrid>

        <GamesListGrid>
          {results.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </GamesListGrid>
      </Container>
    </MainContentLayout>
  );
};

GamesListContent.propTypes = {
  games_count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};

export default GamesListContent;
