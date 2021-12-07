import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ROUTE_GAMES } from "utils/constants";

const ArrayItem = styled.span`
  &:not(:last-child) {
    &:after {
      content: ", ";
    }
  }
`;

const GameInfoValueList = ({ array, queryParam, objProp }) => {
  return (
    <>
      {array.map((item) => {
        const { id, name } = objProp ? item[objProp] : item;

        return (
          <ArrayItem key={name}>
            <Link to={`${ROUTE_GAMES}?${queryParam}=${id}`}>{name}</Link>
          </ArrayItem>
        );
      })}
    </>
  );
};

GameInfoValueList.propTypes = {
  array: PropTypes.array.isRequired,
  queryParam: PropTypes.string.isRequired,
  objProp: PropTypes.string,
};

export default GameInfoValueList;
