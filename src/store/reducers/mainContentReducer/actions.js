import axios from "axios";

import { API_URL } from "utils/constants";
import * as types from "./types";

export const loadContentStart = () => ({
  type: types.LOAD_CONTENT_START,
});

export const loadContentSuccess = (payload) => ({
  type: types.LOAD_CONTENT_SUCCESS,
  payload,
});

export const loadContentError = (payload) => ({
  type: types.LOAD_CONTENT_ERROR,
  payload,
});

export const fetchContent =
  (category, slug = "") =>
  async (dispatch) => {
    dispatch(loadContentStart());

    try {
      const response = await axios.get(`${API_URL}${category}/${slug}`);

      dispatch(loadContentSuccess(response.data));
    } catch (err) {
      dispatch(loadContentError(err));
    }
  };
