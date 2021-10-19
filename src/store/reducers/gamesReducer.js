const initialState = {
  gamesList: [],
  loading: false,
  error: false,
};

const LOAD_GAMES_LIST = "LOAD_GAMES_LIST";
const LOAD_GAMES_LIST_SUCCESS = "LOAD_GAMES_LIST_SUCCESS";
const LOAD_GAMES_LIST_ERROR = "LOAD_GAMES_LIST_ERROR";

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GAMES_LIST:
      return { ...state, loading: true };
    case LOAD_GAMES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        gamesList: action.payload,
      };
    case LOAD_GAMES_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const loadGamesList = () => ({ type: LOAD_GAMES_LIST });
export const loadGamesListSuccess = (payload) => ({
  type: LOAD_GAMES_LIST_SUCCESS,
  payload,
});
export const loadGamesListError = (payload) => ({
  type: LOAD_GAMES_LIST_ERROR,
  payload,
});
