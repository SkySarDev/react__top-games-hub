import * as types from "./types";

const initialState = {
  list: [],
  singleGame: {},
  background: null,
  loading: false,
  error: false,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_GAMES_LIST:
      return { ...state, loading: true };
    case types.LOAD_GAMES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        ...action.payload,
      };
    case types.LOAD_GAMES_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default gamesReducer;
