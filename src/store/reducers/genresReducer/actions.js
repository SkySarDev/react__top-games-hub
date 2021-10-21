import * as types from "./types";
import axios from "axios";
import { API_URL } from "utils/constants";

export const loadGenresList = () => ({ type: types.LOAD_GENRES_LIST });

export const loadGenresListSuccess = (payload) => ({
  type: types.LOAD_GENRES_LIST_SUCCESS,
  payload,
});

export const loadGenresListError = (payload) => ({
  type: types.LOAD_GENRES_LIST_ERROR,
  payload,
});

export const fetchGenres = () => async (dispatch) => {
  dispatch(loadGenresList());

  try {
    const response = await axios.get(`${API_URL}/genres`);
    dispatch(loadGenresListSuccess(response.data));
  } catch (err) {
    dispatch(loadGenresListError(err));
  }
};
