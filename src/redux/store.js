import {combineReducers} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices";

const rootReducer = combineReducers({
    moviesListReducer
});

const setupStore = combineReducers({
    reducer: rootReducer
    });

export {setupStore}