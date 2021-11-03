import React from "react";
import PropTypes from "prop-types";

import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";
import GameCard from "components/cards/GameCard";

const AllGamesPage = ({ gamesList }) => {
  return (
    <MainContentLayout title={"Games"}>
      <ContentGrid>
        {gamesList.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </ContentGrid>
    </MainContentLayout>
  );
};

AllGamesPage.propTypes = {
  gamesList: PropTypes.array.isRequired,
};

export default AllGamesPage;
