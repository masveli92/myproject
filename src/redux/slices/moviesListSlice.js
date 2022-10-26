import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState ={
    moviesList: [],
    totalPages: 1,
    actualPage: 1,
    movieInfo: {},
    movieSearch:[],
    loading: false,
    errors: null,
}

const getMovies = createAsyncThunk(
    "moviesListSlice/getMovies",
    async ({page, genre}, {rejectWithValue})=> {
        try {
            const {data} = await moviesService.getMovies(page, genre);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getMovieById = createAsyncThunk(
    "moviesListSlice/getMovieById",
    async ({id}, {rejectWithValue})=> {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const search = createAsyncThunk(
    'moviesListSlice/getMoviesBySearch',
    async ({name, page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchByName(name, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const moviesListSlice = createSlice({
    name: 'moviesListSlice',
    initialState,
    reducers: { },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action)=>{
                state.moviesList = action.payload;
                state.totalPages = action.payload.totalPages;
                state.actualPage = action.payload.page;

            })
            .addCase(getMovieById.fulfilled,(state,action) =>{
                state.movieInfo = action.payload;
            })

            .addCase(search.fulfilled, (state, action) => {
                state.moviesList = action.payload.results;
                state.totalPages = action.payload.totalPages;
                state.actualPage = action.payload.page;
            })

            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload;
                } else {
                    state.errors = null;
                }
            })
});

const {reducer: moviesListReducer }  = moviesListSlice;

const moviesListActions = {getMovies, getMovieById, search};

export {moviesListActions, moviesListReducer}



