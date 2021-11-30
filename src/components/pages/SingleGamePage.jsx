import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainContentLayout from "components/UI/MainContentLayout";
import GenresList from "components/UI/GenresList";
import SectionTitle from "components/UI/SectionTitle";
import GameInfoBlock from "components/blocks/SingleGamePageComponents/GameInfoBlock";
import MetacriticScore from "components/UI/MetacriticScore";
import GameScreenshots from "components/blocks/SingleGamePageComponents/GameScreenshots";

const BoxInner = styled.div`
  font-size: 18px;
  line-height: 130%;
  padding: 20px;
`;

const TopGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 30px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
`;

const SingleGamePage = ({ isLoading, gameData }) => {
  const [gameContent, setGameContent] = useState({ noContent: true });

  useEffect(() => {
    if (gameData) {
      setGameContent(gameData);
    }
  }, [gameData]);

  return (
    <>
      {isLoading || gameContent.noContent ? (
        <MainContentLayout title={"Loading..."}>
          <BoxInner>Loading...</BoxInner>
        </MainContentLayout>
      ) : (
        <MainContentLayout title={gameContent.name}>
          <BoxInner>
            {!!gameContent.genres.length && (
              <TopGrid>
                <GenresList genresList={gameContent.genres} maxWidth={900} />
                {gameContent.metacritic && (
                  <MetacriticScore
                    score={gameContent.metacritic}
                    options={{ size: 30, fontSize: 18 }}
                  />
                )}
              </TopGrid>
            )}

            <Grid>
              <div>
                <SectionTitle bottom={10}>Game info</SectionTitle>
                <GameInfoBlock {...gameContent} />
              </div>
              <div>
                <SectionTitle bottom={10}>Description</SectionTitle>
                <p>{gameContent.description_raw || gameContent.description}</p>
              </div>
            </Grid>

            {!!gameContent.screenshots.length && (
              <>
                <SectionTitle top={20} bottom={10}>
                  Screenshots
                </SectionTitle>
                <GameScreenshots
                  gameName={gameContent.name}
                  screenshots={gameContent.screenshots}
                />
              </>
            )}
          </BoxInner>
        </MainContentLayout>
      )}
    </>
  );
};

export default SingleGamePage;

SingleGamePage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  gameData: PropTypes.object,
};
