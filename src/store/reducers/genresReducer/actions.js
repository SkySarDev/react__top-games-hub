import axios from "axios";

import { API_URL } from "utils/constants";
import * as types from "./types";

export const loadGenres = () => ({ type: types.LOAD_GENRES });

export const loadGenresListSuccess = (payload) => ({
  type: types.LOAD_GENRES_LIST_SUCCESS,
  payload,
});

export const loadGenreSingleSuccess = (payload) => ({
  type: types.LOAD_GENRE_SINGLE_SUCCESS,
  payload,
});

export const loadGenresError = (payload) => ({
  type: types.LOAD_GENRES_ERROR,
  payload,
});

export const fetchGenresList = () => async (dispatch) => {
  dispatch(loadGenres());

  try {
    const response = await axios.get(`${API_URL}/genres`);
    dispatch(loadGenresListSuccess(response.data));
  } catch (err) {
    dispatch(loadGenresError(err));
  }
};

export const fetchGenreSingle = (genre) => async (dispatch) => {
  dispatch(loadGenres());

  try {
    const response = await axios.get(`${API_URL}/genres/${genre}`);
    dispatch(loadGenreSingleSuccess(response.data));
  } catch (err) {
    dispatch(loadGenresError(err));
  }
};
