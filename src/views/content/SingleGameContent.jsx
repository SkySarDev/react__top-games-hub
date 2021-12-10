import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainContentLayout from "components/UI/MainContentLayout";
import GenresList from "components/UI/GenresList";
import MetacriticScore from "components/UI/MetacriticScore";
import GenresListSkeleton from "components/UI/GenresList/GenresListSkeleton";
import GameInfoBlock from "components/blocks/SingleGameContent/GameInfoBlock";
import GameScreenshots from "components/blocks/SingleGameContent/GameScreenshots";
import GameInfoBlockSkeleton from "components/blocks/SingleGameContent/GameInfoBlockSkeleton";
import GameDescription from "components/blocks/SingleGameContent/GameDescription";

const BoxInner = styled.div`
  font-size: 18px;
  line-height: 130%;
  padding: 20px;
`;

const TopGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 30px;
  height: 35px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;

const SingleGameContent = ({ isLoading, data }) => {
  return (
    <MainContentLayout title={isLoading ? "Loading..." : data.name}>
      <BoxInner>
        <TopGrid>
          {isLoading ? (
            <GenresListSkeleton />
          ) : (
            <>
              {!!data.genres.length && (
                <GenresList genresList={data.genres} maxWidth={900} />
              )}
              {data.metacritic && (
                <MetacriticScore
                  score={data.metacritic}
                  options={{ size: 30, fontSize: 18 }}
                />
              )}
            </>
          )}
        </TopGrid>

        <Grid>
          {isLoading ? (
            <>
              <GameInfoBlockSkeleton />
              <GameDescription isLoading />
            </>
          ) : (
            <>
              <GameInfoBlock {...data} />
              <GameDescription isLoading={false} {...data} />
            </>
          )}
        </Grid>

        {isLoading ? (
          <GameScreenshots isLoading />
        ) : (
          !!data.screenshots.length && (
            <GameScreenshots
              isLoading={false}
              gameName={data.name}
              screenshots={data.screenshots}
            />
          )
        )}
      </BoxInner>
    </MainContentLayout>
  );
};

export default SingleGameContent;

SingleGameContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object,
};
