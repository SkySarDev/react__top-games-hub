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

const ContentGrid = styled.div`
  display: grid;
  align-content: space-between;
  height: 100%;

  &:hover h3 {
    transition: color 0.35s;
    color: #999999;
  }
`;

const Rating = styled.div`
  justify-self: end;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #e2e0d0;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 15px;
  justify-content: space-between;
  align-items: center;
`;

const GameCard = ({
  name,
  slug,
  background_image,
  genres,
  released,
  metacritic,
}) => {
  const releaseDate = new Date(released).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <CardBox bgImage={background_image} height={250}>
      <Body>
        <Link to={`${ROUTE_GAMES}/${slug}`}>
          <ContentGrid>
            <Rating>
              {metacritic && <MetacriticScore score={metacritic} />}
            </Rating>
            <Title>{name}</Title>
          </ContentGrid>
        </Link>
        <InfoRow>
          <GenresList genresList={genres} maxWidth={215} />
          {releaseDate}
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
  released: PropTypes.string.isRequired,
  metacritic: PropTypes.number,
};
