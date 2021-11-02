import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CardBox from "components/cards/CardBox";

const Body = styled.div`
  position: relative;
  display: grid;
  align-content: end;
  height: 100%;
  padding: 15px;
  color: #e2e0d0;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  text-align: right;
  color: #999999;
`;

const GamesCount = styled.span`
  padding: 5px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #59584c;
  border-radius: 3px;
  color: #e2e0d0;
`;

const Card = ({ route, slug, name, image_background, games_count }) => {
  return (
    <CardBox bgImage={image_background} height={220}>
      <Link to={`${route}/${slug}`}>
        <Body>
          <Title>{name}</Title>
          <InfoRow>
            Games count: <GamesCount>{games_count}</GamesCount>
          </InfoRow>
        </Body>
      </Link>
    </CardBox>
  );
};

export default Card;

Card.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  games_count: PropTypes.number.isRequired,
  image_background: PropTypes.string.isRequired,
};
