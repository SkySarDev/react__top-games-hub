import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ROUTE_GAMES } from "utils/constants";

import GenresList from "components/UI/GenresList";
import CardBox from "components/cards/CardBox";
import MetacriticScore from "components/UI/MetacriticScore";

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
          <GenresList genresList={genres} maxWidth={280} />
          {metacritic && <MetacriticScore score={metacritic} />}
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
