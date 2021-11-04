import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainContentLayout from "components/UI/MainContentLayout";
import GenresList from "components/UI/GenresList";
import SectionTitle from "components/UI/SectionTitle";
import GameInfoBlock from "components/SingleGamePageComponents/GameInfoBlock";
import MetacriticScore from "components/UI/MetacriticScore";
import GameScreenshots from "components/SingleGamePageComponents/GameScreenshots";

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

const SingleGamePage = ({ gameData }) => {
  const { name, description_raw, genres, screenshots, metacritic } = gameData;

  return (
    <MainContentLayout title={name}>
      <BoxInner>
        {!!genres.length && (
          <TopGrid>
            <GenresList genresList={genres} maxWidth={900} />
            {metacritic && (
              <MetacriticScore
                score={metacritic}
                options={{ size: 30, fontSize: 18 }}
              />
            )}
          </TopGrid>
        )}

        <Grid>
          <div>
            <SectionTitle bottom={10}>Game info</SectionTitle>
            <GameInfoBlock {...gameData} />
          </div>
          <div>
            <SectionTitle bottom={10}>Description</SectionTitle>
            <p>{description_raw}</p>
          </div>
        </Grid>
        <SectionTitle top={20} bottom={10}>
          Screenshots
        </SectionTitle>
        <GameScreenshots gameName={name} screenshots={screenshots} />
      </BoxInner>
    </MainContentLayout>
  );
};

export default SingleGamePage;

SingleGamePage.propTypes = {
  gameData: PropTypes.object.isRequired,
};
