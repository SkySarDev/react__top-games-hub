import React from "react";
import PropTypes from "prop-types";

const AllGamesPage = ({ gamesList }) => {
  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Games</h1>
      <ul>
        {gamesList.map((game) => {
          return (
            <li key={game.id} style={{ border: "1px solid grey", padding: 5 }}>
              {game.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

AllGamesPage.propTypes = {
  gamesList: PropTypes.array.isRequired,
};

export default AllGamesPage;
