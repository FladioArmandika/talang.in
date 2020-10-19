// STORE
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const createAppStore = () => {
    return createStore(rootReducer, composeWithDevTools());
}

export default createAppStore;

// console.log(store.getState());

// DISPATCHING ACTION
// store.dispatch({type: 'ADD_AGE'})
