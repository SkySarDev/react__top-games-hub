import React, { useEffect, useState } from "react";
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

const GamesListContent = ({ isLoading, data }) => {
  const [content, setContent] = useState({ noContent: true });

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);

  return (
    <>
      {isLoading || content.noContent ? (
        <MainContentLayout title={"Loading..."}>
          <Container>
            <TitleGrid>Loading...</TitleGrid>
          </Container>
        </MainContentLayout>
      ) : (
        <MainContentLayout title={content.title}>
          <Container>
            <TitleGrid>
              <SectionTitle>
                Games count:{" "}
                <span>{content.games_count.toLocaleString("en-US")}</span>
              </SectionTitle>
              <GamesFilterBlock />
            </TitleGrid>

            <GamesListGrid>
              {content.results.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </GamesListGrid>
          </Container>
        </MainContentLayout>
      )}
    </>
  );
};

GamesListContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object,
};

export default GamesListContent;
