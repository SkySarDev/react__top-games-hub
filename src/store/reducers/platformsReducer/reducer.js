import * as types from "./types";

const initialState = {
  list: [],
  singlePlatform: null,
  bgImage: null,
  loading: false,
  error: false,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PLATFORMS_START:
      return { ...state, loading: true };
    case types.LOAD_PLATFORMS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        ...action.payload,
      };
    case types.LOAD_PLATFORMS_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        singleGenre: action.payload,
        bgImage: action.payload.image_background,
      };
    case types.LOAD_PLATFORMS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default genresReducer;
