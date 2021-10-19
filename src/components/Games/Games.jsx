import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "api/fetchGames";
import { useParams } from "react-router-dom";

const Games = () => {
  const { gamesList, loading } = useSelector((state) => state.games);
  const dispatch = useDispatch();
  const { genre } = useParams();

  useEffect(() => {
    dispatch(fetchGames(genre));
  }, [genre, dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {gamesList.map((game) => {
        return (
          <li key={game.id} style={{ border: "1px solid grey" }}>
            <div>{game.name}</div>
            <div>
              {game.genres.map((genre) => {
                return (
                  <span
                    style={{ margin: 5, backgroundColor: "greenyellow" }}
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Games;
