import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { destinReducer } from "./reducers/destin.js";
import { profileUserReducer, userReducer } from "./reducers/user.js";

const reducer = combineReducers({
  destin: destinReducer,
  user: userReducer,
  profileUser: profileUserReducer,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
