import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CardSpinner from "components/UI/cards/CardSpinner";
import { CardAbsoluteDiv } from "components/UI/styles";

import eyeIcon from "images/icons/eye-preview.svg";
import cardNoImage from "images/card-no-image.png";

const CardWrapper = styled.div`
  position: relative;
  height: ${({ height }) => height || "250"}px;
  border: 1px solid #59584c;
  border-radius: 5px;
  background-color: #1b1b1b;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const BackgroundGradient = styled(CardAbsoluteDiv)`
  background: linear-gradient(
    180deg,
    rgba(27, 27, 27, 0) 0%,
    rgba(27, 27, 27, 0.85) 65%,
    #1b1b1b 85%
  );
`;

const Hover = styled(CardAbsoluteDiv)`
  content: "";
  top: 0;
  left: 0;
  transition: background 0.35s;
  background-color: transparent;
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: 0;

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
  const [imageLoad, setImageLoad] = useState(true);
  const image = bgImage || cardNoImage;

  const imageLoadHandler = () => setImageLoad(false);

  return (
    <CardWrapper height={height}>
      <BackgroundImage src={image} onLoad={imageLoadHandler} />
      <BackgroundGradient />

      {imageLoad && <CardSpinner />}

      <Hover>{children}</Hover>
    </CardWrapper>
  );
};

export default CardBox;

CardBox.propTypes = {
  bgImage: PropTypes.string,
  height: PropTypes.number,
};
