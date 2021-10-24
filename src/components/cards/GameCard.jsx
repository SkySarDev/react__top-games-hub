import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GenresList from "components/UI/GenresList";
import CardBox from "components/cards/CardBox";

const Body = styled.div`
  position: relative;
  display: grid;
  align-content: end;
  height: 100%;
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 25px;
  justify-content: space-between;
  align-items: center;
`;

const MetaScore = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #faf8ea;
  background-color: ${({ score }) =>
    score < 50 ? "#9f0000" : score < 75 ? "#9d7c08" : "#4f972c"};
`;

const GameCard = ({ name, background_image, genres, metacritic }) => {
  return (
    <CardBox bgImage={background_image} height={250}>
      <Body>
        <Title>{name}</Title>
        <InfoRow>
          <GenresList genresList={genres} />
          {metacritic && <MetaScore score={metacritic}>{metacritic}</MetaScore>}
        </InfoRow>
      </Body>
    </CardBox>
  );
};

export default GameCard;

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  metacritic: PropTypes.number,
};
