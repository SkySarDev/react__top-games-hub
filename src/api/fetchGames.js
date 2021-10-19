import axios from "axios";
import {
  loadGamesList,
  loadGamesListError,
  loadGamesListSuccess,
} from "store/reducers/gamesReducer";

export const fetchGames = (genre) => {
  return async (dispatch) => {
    dispatch(loadGamesList());

    try {
      const slug = genre || "";
      const response = await axios.get("http://localhost:5000/games/" + slug);

      dispatch(loadGamesListSuccess(response.data));
    } catch (err) {
      dispatch(loadGamesListError(err));
    }
  };
};
