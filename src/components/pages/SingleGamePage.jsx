import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainContentLayout from "components/UI/MainContentLayout";
import GenresList from "components/UI/GenresList";
import SectionTitle from "components/UI/SectionTitle";

const BoxInner = styled.div`
  padding: 20px;
`;

const GenresWrapper = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 130%;
`;

const SingleGamePage = ({ name, description_raw, genres, screenshots }) => {
  return (
    <MainContentLayout title={name}>
      <BoxInner>
        <GenresWrapper>
          <GenresList genresList={genres} />
        </GenresWrapper>
        <SectionTitle bottom={10}>Description</SectionTitle>
        <Description>{description_raw}</Description>
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
  name: PropTypes.string.isRequired,
  description_raw: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  screenshots: PropTypes.array.isRequired,
};
