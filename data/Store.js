import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import data_reducer from "../reducers/data_reducer";
// initial states here
import initalState from "./initial_state";
import app_reducer from "../reducers/app_reducer";

// middleware
const middleware = [thunk];

const allReducers = combineReducers({
  data: data_reducer,
  app: app_reducer,
})

// creating store
export const store = createStore(
  allReducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);