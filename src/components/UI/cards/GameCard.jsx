import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ROUTE_RELEASE_CALENDAR, ROUTE_GAMES } from "utils/constants";
import { getShortDateString } from "utils/dateFuncs";

import GenresList from "components/UI/GenresList";
import CardBox from "components/UI/cards/CardBox";
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

  a {
    color: #e2e0d0;
    transition: color 0.3s;

    &:hover {
      color: #999999;
    }
  }
`;

const GameCard = ({
  name,
  slug,
  background_image,
  genres,
  released,
  metacritic,
}) => {
  const releaseDateShort = released ? getShortDateString(released) : null;

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
          {released && (
            <Link
              to={`${ROUTE_RELEASE_CALENDAR}?dates=${released},${released}`}
            >
              {releaseDateShort}
            </Link>
          )}
        </InfoRow>
      </Body>
    </CardBox>
  );
};

export default GameCard;

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  background_image: PropTypes.string,
  genres: PropTypes.array.isRequired,
  released: PropTypes.string,
  metacritic: PropTypes.number,
};
