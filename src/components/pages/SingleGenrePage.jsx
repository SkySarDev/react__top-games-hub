import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import GameCard from "components/cards/GameCard";

const Container = styled.div`
  padding: 20px;
`;

const Description = styled.p`
  margin-bottom: 30px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const SingleGenrePage = ({ data }) => {
  return (
    <MainContentLayout title={data.name}>
      <Container>
        <Description dangerouslySetInnerHTML={{ __html: data.description }} />
        <ContentGrid>
          {data.results.map((game) => (
            <GameCard key={game.id} data={game} />
          ))}
        </ContentGrid>
      </Container>
    </MainContentLayout>
  );
};

export default SingleGenrePage;

SingleGenrePage.propTypes = {
  data: PropTypes.object.isRequired,
};
