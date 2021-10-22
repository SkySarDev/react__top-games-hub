import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTE_GENRES } from "utils/constants";

const CardWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 202px;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const CardInner = styled.div`
  padding: 10px;
`;

const DarkenBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  background: radial-gradient(
      50% 150% at 50% 50%,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.8) 80%,
      #1b1b1b 100%
    ),
    radial-gradient(
      150% 50% at 50% 50%,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.8) 80%,
      #1b1b1b 100%
    );

  &:hover {
    opacity: 0.5;
  }
`;

const CardTitle = styled.h3`
  color: #d9ebe9;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const GenreCard = ({ data }) => {
  const { slug, name, image_background } = data;

  return (
    <CardWrapper bgImage={image_background}>
      <Link to={`${ROUTE_GENRES}/${slug}`}>
        <DarkenBackground>
          <CardInner>
            <CardTitle>{name}</CardTitle>
          </CardInner>
        </DarkenBackground>
      </Link>
    </CardWrapper>
  );
};

export default GenreCard;

GenreCard.propTypes = {
  data: PropTypes.object.isRequired,
};
