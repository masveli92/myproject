import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState ={
    moviesList: [],
    choozenMovie: null,
    maxPage: null,
    genreId: '',
    errors: null
}

const getMovies = createAsyncThunk(
    "moviesListSlice/getAll",
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await moviesService.getMovies();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const moviesListSlice = createSlice({
    name: 'moviesListSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action)=>
            state.moviesList = action.payload
        )
});
const {reducer: moviesListReducer, actions}  = moviesListSlice;

const moviesListActions = {getMovies};

export {moviesListActions, moviesListReducer}
