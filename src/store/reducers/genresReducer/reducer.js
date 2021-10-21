import * as types from "./types";

const initialState = {
  genresList: [],
  loading: false,
  error: false,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_GENRES_LIST:
      return { ...state, loading: true };
    case types.LOAD_GENRES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        genresList: action.payload,
      };
    case types.LOAD_GENRES_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default genresReducer;
