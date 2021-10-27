import * as types from "./types";
import axios from "axios";
import { API_URL } from "utils/constants";

export const loadGamesStart = () => ({ type: types.LOAD_GAMES_START });

export const loadGamesListSuccess = (payload) => ({
  type: types.LOAD_GAMES_LIST_SUCCESS,
  payload,
});

export const loadGameSingleSuccess = (payload) => ({
  type: types.LOAD_GAME_SINGLE_SUCCESS,
  payload,
});

export const loadGamesError = (payload) => ({
  type: types.LOAD_GAMES_ERROR,
  payload,
});

export const fetchGamesList = () => async (dispatch) => {
  dispatch(loadGamesStart());

  try {
    const response = await axios.get(`${API_URL}/games`);
    dispatch(loadGamesListSuccess(response.data));
  } catch (err) {
    dispatch(loadGamesError(err));
  }
};

export const fetchGameSingle = (game) => async (dispatch) => {
  dispatch(loadGamesStart());

  try {
    const response = await axios.get(`${API_URL}/games/${game}`);
    dispatch(loadGameSingleSuccess(response.data));
  } catch (err) {
    dispatch(loadGamesError(err));
  }
};
