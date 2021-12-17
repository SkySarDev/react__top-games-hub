import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CardBox from "components/UI/cards/CardBox";
import { ROUTE_GAMES } from "utils/constants";

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

const Card = ({ id, name, image_background, games_count, category }) => {
  return (
    <CardBox bgImage={image_background} height={220}>
      <Link to={`${ROUTE_GAMES}?${category}=${id}`}>
        <Body>
          <Title>{name}</Title>
          <InfoRow>
            Games count:{" "}
            <GamesCount>{games_count.toLocaleString("en-US")}</GamesCount>
          </InfoRow>
        </Body>
      </Link>
    </CardBox>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  games_count: PropTypes.number.isRequired,
  image_background: PropTypes.string,
  category: PropTypes.string.isRequired,
};
