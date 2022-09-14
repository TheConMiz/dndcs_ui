import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducers";
import data_reducer from "./reducers/data_reducer";

// initial states here
const initalState = {
    app: {
        settings_page: false,
        settings: {
            dark_mode: false,
        },
        endpoints: {
            srd: ""
        },

    },
    data: {
        spells: [],
        rules: {
            abilityScores: [],
            conditions: [],
            damageTypes: [],
            spellComponents: [],
            magicSchools: [],
            levels: [],
            sources: [],  
        },

    }
};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  data_reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);