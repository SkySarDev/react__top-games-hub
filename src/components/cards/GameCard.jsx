import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ROUTE_GAMES } from "utils/constants";

import GenresList from "components/UI/GenresList";
import CardBox from "components/cards/CardBox";

const Body = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr auto;
  row-gap: 10px;
  padding: 15px;
  align-content: end;
`;

const ContentRow = styled.div`
  display: grid;
  align-content: end;
  height: 100%;

  &:hover h3 {
    transition: color 0.35s;
    color: #999999;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #e2e0d0;
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

const GameCard = ({ name, slug, background_image, genres, metacritic }) => {
  return (
    <CardBox bgImage={background_image} height={250}>
      <Body>
        <Link to={`${ROUTE_GAMES}/${slug}`}>
          <ContentRow>
            <Title>{name}</Title>
          </ContentRow>
        </Link>
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
  slug: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  metacritic: PropTypes.number,
};
