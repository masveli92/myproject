import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices";

const rootReducer = combineReducers({
    moviesList: moviesListReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
    });

export {setupStore}