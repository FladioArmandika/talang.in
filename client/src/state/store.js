// STORE
import { createStore } from "redux";
import rootReducer from "./reducers";

const createAppStore = () => {
    return createStore(rootReducer);
}

export default createAppStore;

// console.log(store.getState());

// DISPATCHING ACTION
// store.dispatch({type: 'ADD_AGE'})
