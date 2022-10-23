import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer, moviesListReducer} from "./slices";


const rootReducer = combineReducers({
    moviesList: moviesListReducer,
    genre: genreReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
    });

export {setupStore}