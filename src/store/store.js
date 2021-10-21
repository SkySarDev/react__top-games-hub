import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import gamesReducer from "store/reducers/gamesReducer/reducer";
import genresReducer from "store/reducers/genresReducer/reducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  genres: genresReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
