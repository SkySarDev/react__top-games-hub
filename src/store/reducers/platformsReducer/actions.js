import axios from "axios";

import { API_URL } from "utils/constants";
import * as types from "./types";

export const loadPlatformsStart = () => ({ type: types.LOAD_PLATFORMS_START });

export const loadPlatformsListSuccess = (payload) => ({
  type: types.LOAD_PLATFORMS_LIST_SUCCESS,
  payload,
});

export const loadPlatformsSingleSuccess = (payload) => ({
  type: types.LOAD_PLATFORMS_SINGLE_SUCCESS,
  payload,
});

export const loadPlatformsError = (payload) => ({
  type: types.LOAD_PLATFORMS_ERROR,
  payload,
});

export const fetchPlatformsList = () => async (dispatch) => {
  dispatch(loadPlatformsStart());

  try {
    const response = await axios.get(`${API_URL}/platforms`);

    dispatch(loadPlatformsListSuccess(response.data));
  } catch (err) {
    dispatch(loadPlatformsError(err));
  }
};

export const fetchPlatformsSingle = (platform) => async (dispatch) => {
  dispatch(loadPlatformsStart());

  try {
    const response = await axios.get(`${API_URL}/platforms/${platform}`);
    dispatch(loadPlatformsSingleSuccess(response.data));
  } catch (err) {
    dispatch(loadPlatformsError(err));
  }
};
