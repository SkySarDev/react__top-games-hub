import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGenres } from "store/reducers/genresReducer/actions";

const GenresPage = () => {
  const { genresList, loading } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Genres</h1>
      <ul>
        {genresList.map((genre) => {
          return (
            <li key={genre.id} style={{ border: "1px solid grey", padding: 5 }}>
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenresPage;
