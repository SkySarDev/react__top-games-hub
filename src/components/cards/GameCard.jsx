import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GenresList from "components/UI/GenresList";

const Wrapper = styled.div`
  position: relative;
  width: 346px;
  height: 250px;
  border: 1px solid #59584c;
  border-radius: 5px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-position: bottom center;
  background-size: cover;
  border-radius: 5px;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.85) 65%,
      #1b1b1b 85%
    );
  }
`;

const CardBody = styled.div`
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

const GameCard = ({ data }) => {
  const { name, background_image, genres, metacritic } = data;

  return (
    <Wrapper>
      <Background image={background_image}>
        <CardBody>
          <Title>{name}</Title>
          <InfoRow>
            <GenresList genresList={genres} />
            {metacritic && (
              <MetaScore score={metacritic}>{metacritic}</MetaScore>
            )}
          </InfoRow>
        </CardBody>
      </Background>
    </Wrapper>
  );
};

export default GameCard;

GameCard.propTypes = {
  data: PropTypes.object.isRequired,
};
