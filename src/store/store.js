import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import mainContentReducer from "store/reducers/mainContentReducer/reducer";

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  mainContent: mainContentReducer,
});

export const store = createStore(rootReducer, devTools);
