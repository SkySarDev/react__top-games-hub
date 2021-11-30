import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import eyeIcon from "images/icons/eye-preview.svg";

const Wrapper = styled.div`
  position: relative;
  height: ${({ height }) => (height ? height + "px" : "auto")};
  border: 1px solid #59584c;
  border-radius: 5px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-position: center;
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

const Hover = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 0.35s;
  background-color: transparent;
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: 0;
  border-radius: 5px;

  &:hover {
    background-color: rgba(27, 27, 27, 85%);
    background-image: url(${eyeIcon});
    background-size: 70px;

    h3 {
      transition: color 0.35s;
      color: #999999;
    }
  }
`;

const CardBox = ({ bgImage, height, children }) => {
  return (
    <Wrapper height={height}>
      <Background image={bgImage}>
        <Hover>{children}</Hover>
      </Background>
    </Wrapper>
  );
};

export default CardBox;

CardBox.propTypes = {
  bgImage: PropTypes.string.isRequired,
  height: PropTypes.number,
};
