import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import { reducer as main } from "../reducers/main";

const sortReducers = () => {
    const reducers = {
        main
    };

    // reducers are sorted
    const names = Object.keys(reducers).sort();
    return names.reduce((acc, name) => {
        if (!acc.hasOwnProperty(name)) {
            acc[name] = reducers[name];
        }
        return acc;
    }, {});
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers(sortReducers()),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

export default configureStore;
