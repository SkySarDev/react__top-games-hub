import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGames } from "store/reducers/gamesReducer/actions";

const GamesPage = () => {
  const { gamesList, loading } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

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

export default GamesPage;
