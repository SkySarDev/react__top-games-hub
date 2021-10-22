import * as types from "./types";

const initialState = {
  list: [],
  singleGenre: null,
  bgImage: null,
  loading: false,
  error: false,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_GENRES_START:
      return { ...state, loading: true };
    case types.LOAD_GENRES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        ...action.payload,
      };
    case types.LOAD_GENRE_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        singleGenre: action.payload,
        bgImage: action.payload.image_background,
      };
    case types.LOAD_GENRES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default genresReducer;
