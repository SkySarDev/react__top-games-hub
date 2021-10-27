import * as types from "./types";

const initialState = {
  list: [],
  singleGame: null,
  bgImage: null,
  loading: false,
  error: false,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_GAMES_START:
      return { ...state, loading: true };
    case types.LOAD_GAMES_LIST_SUCCESS: {
      const { list, bgImage } = action.payload;

      return {
        ...state,
        loading: false,
        error: false,
        list,
        bgImage,
      };
    }
    case types.LOAD_GAME_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        singleGame: action.payload,
        bgImage: action.payload.background_image,
      };
    case types.LOAD_GAMES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default gamesReducer;
