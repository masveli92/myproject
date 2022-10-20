import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices";

const rootReducer = combineReducers({
    moviesListReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
    });

export {setupStore}