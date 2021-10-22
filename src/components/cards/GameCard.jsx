import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  background-image: url(${(props) => props.image});
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

const Body = styled.div`
  padding: 10px;
`;

const GameCard = ({ data }) => {
  const { name, background_image } = data;
  return (
    <Wrapper>
      <Background image={background_image}>
        <Body>{name}</Body>
      </Background>
    </Wrapper>
  );
};

export default GameCard;

GameCard.propTypes = {
  data: PropTypes.object.isRequired,
};
