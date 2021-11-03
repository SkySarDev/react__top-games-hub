import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import GameCard from "components/cards/GameCard";
import SectionTitle from "components/UI/SectionTitle";

const Container = styled.div`
  padding: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 130%;
  margin-bottom: 20px;
`;

const GamesCount = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #999999;
  margin-bottom: 20px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const SingleContentPage = ({ name, description, games_count, results }) => {
  return (
    <MainContentLayout title={name}>
      <Container>
        {description && (
          <>
            <SectionTitle bottom={10}>Description</SectionTitle>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </>
        )}
        <SectionTitle bottom={10}>Games count</SectionTitle>
        <GamesCount>{games_count}</GamesCount>
        <ContentGrid>
          {results.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </ContentGrid>
      </Container>
    </MainContentLayout>
  );
};

SingleContentPage.propTypes = {
  description: PropTypes.string,
  games_count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};

export default SingleContentPage;
