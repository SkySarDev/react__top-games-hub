import React from "react";
import TruncatedList from "react-truncate-list";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTE_GAMES } from "utils/constants";

import "./GenresList.css";

const GenresList = ({ genresList, maxWidth }) => {
  return (
    <TruncatedList
      className={"genresList"}
      style={{ maxWidth }}
      itemClassName={"genreItem"}
      renderTruncator={({ hiddenItemsCount }) => (
        <div className={"genreItem"}>+{hiddenItemsCount}</div>
      )}
    >
      {genresList.map((genreItem) => {
        const { id, name } = genreItem;
        return (
          <Link key={id} to={`${ROUTE_GAMES}?genres=${id}`}>
            {name}
          </Link>
        );
      })}
    </TruncatedList>
  );
};

export default GenresList;

GenresList.propTypes = {
  genresList: PropTypes.array.isRequired,
  maxWidth: PropTypes.number.isRequired,
};
