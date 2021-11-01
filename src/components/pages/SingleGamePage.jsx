import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainContentLayout from "components/UI/MainContentLayout";
import GenresList from "components/UI/GenresList";
import SectionTitle from "components/UI/SectionTitle";
import GameInfoBlock from "components/SingleGamePageComponents/GameInfoBlock";

const BoxInner = styled.div`
  font-size: 18px;
  line-height: 130%;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  margin-top: 20px;
`;

const SingleGamePage = ({ gameData }) => {
  const { name, description_raw, genres, screenshots } = gameData;

  return (
    <MainContentLayout title={name}>
      <BoxInner>
        <GenresList genresList={genres} maxWidth={900} />
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
        {screenshots.map((screenItem) => {
          return (
            <img
              src={screenItem.image}
              alt={name}
              key={screenItem.id}
              width={350}
            />
          );
        })}
      </BoxInner>
    </MainContentLayout>
  );
};

export default SingleGamePage;

SingleGamePage.propTypes = {
  gameData: PropTypes.object.isRequired,
};
