import axios from "axios";

import { API_URL } from "utils/constants";
import * as types from "./types";

export const loadContentStart = () => ({
  type: types.LOAD_CONTENT_START,
});

export const loadMoreDataStart = () => ({
  type: types.LOAD_MORE_DATA_START,
});

export const loadContentSuccess = (payload) => ({
  type: types.LOAD_CONTENT_SUCCESS,
  payload,
});

export const loadMoreDataSuccess = (payload) => ({
  type: types.LOAD_MORE_DATA_SUCCESS,
  payload,
});

export const loadContentError = (payload) => ({
  type: types.LOAD_CONTENT_ERROR,
  payload,
});

export const fetchContent = (queryParams) => async (dispatch) => {
  dispatch(loadContentStart());

  try {
    const response = await axios.get(API_URL + queryParams);

    dispatch(loadContentSuccess(response.data));
  } catch (err) {
    dispatch(loadContentError(err.message));
  }
};

export const fetchMoreData = (queryParams) => async (dispatch) => {
  dispatch(loadMoreDataStart());

  try {
    const response = await axios.get(API_URL + queryParams);

    dispatch(loadMoreDataSuccess(response.data));
  } catch (err) {
    dispatch(loadContentError(err.message));
  }
};
