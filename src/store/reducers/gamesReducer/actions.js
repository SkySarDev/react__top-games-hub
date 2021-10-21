import * as types from "./types";
import axios from "axios";
import { API_URL } from "utils/constants";

export const loadGamesList = () => ({ type: types.LOAD_GAMES_LIST });

export const loadGamesListSuccess = (payload) => ({
  type: types.LOAD_GAMES_LIST_SUCCESS,
  payload,
});

export const loadGamesListError = (payload) => ({
  type: types.LOAD_GAMES_LIST_ERROR,
  payload,
});

export const fetchGames = () => async (dispatch) => {
  dispatch(loadGamesList());

  try {
    const response = await axios.get(`${API_URL}/games`);
    dispatch(loadGamesListSuccess(response.data));
  } catch (err) {
    dispatch(loadGamesListError(err));
  }
};
