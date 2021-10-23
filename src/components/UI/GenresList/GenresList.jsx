import React from "react";
import TruncatedList from "react-truncate-list";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./GenresList.css";

const GenresList = ({ genresList }) => {
  return (
    <TruncatedList
      className={"genresList"}
      itemClassName={"genreItem"}
      renderTruncator={({ hiddenItemsCount }) => (
        <div className={"genreItem"}>+{hiddenItemsCount}</div>
      )}
    >
      {genresList.map((genreItem) => (
        <Link key={genreItem.id} to={genreItem.slug}>
          {genreItem.name}
        </Link>
      ))}
    </TruncatedList>
  );
};

export default GenresList;

GenresList.propTypes = {
  genresList: PropTypes.array.isRequired,
};
