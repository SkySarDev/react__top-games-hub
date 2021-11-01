import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ArrayItem = styled.span`
  &:not(:last-child) {
    &:after {
      content: ", ";
    }
  }
`;

const GameInfoValueList = ({ array, route, objProp }) => {
  return (
    <>
      {array.map((item) => {
        const { name, slug } = objProp ? item[objProp] : item;

        return (
          <ArrayItem key={name}>
            <Link to={`${route}/${slug}`}>{name}</Link>
          </ArrayItem>
        );
      })}
    </>
  );
};

GameInfoValueList.propTypes = {
  array: PropTypes.array.isRequired,
  route: PropTypes.string.isRequired,
  objProp: PropTypes.string,
};

export default GameInfoValueList;
