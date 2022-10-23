import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState ={
    moviesList: [],
    choozenMovie: null,
    maxPage: null,
    // genreId: '',
    errors: null
}

const getMovies = createAsyncThunk(
    "moviesListSlice/getAll",
    async ({page}, {rejectWithValue})=> {
        try {
            const {data} = await moviesService.getMovies(page);
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
            const {data} = await moviesService.getMovies(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const moviesListSlice = createSlice({
    name: 'moviesListSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action)=>{
                state.moviesList = action.payload;
                if (action.payload.total_pages < 500) {
                    state.maxPage = action.payload.total_pages;
                } else {
                    state.maxPage = 500;
                }
            })
            .addCase(getMovieById.fulfilled,(state,action) =>{
                state.choozenMovie = action.payload;
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

const {reducer: moviesListReducer, actions}  = moviesListSlice;

const moviesListActions = {getMovies, getMovieById};

export {moviesListActions, moviesListReducer}



// const initialState = {
//     movies: [],
//     maxPage: null,
//     choozenMovie: null,
//     searchMovie: null,
//     genreId: '',
//     errors: null
// };
//
// const getMovies = createAsyncThunk(
//     'movieListSlice/getMovies',
//     async ({page}, {rejectWithValue}) => {
//         try {
//             const {data} = await moviesService.getMovies(page);
//             return data;
//         } catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );
//
// const getMovieById = createAsyncThunk(
//     'movieListSlice/getMovieById',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const {data} = await moviesService.getMovieById(id);
//             return data;
//         } catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );
//
// const getByName = createAsyncThunk(
//     'movieSlice/getByName',
//     async ({name, page}, {rejectWithValue}) => {
//         try {
//             const {data} = await moviesService.searchByName(name, page);
//             return data;
//         } catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );
//
// const moviesListSlice = createSlice({
//     name: 'moviesListSlice',
//     initialState,
//     reducers: {
//         filterByGenre: (state, action) => {
//             state.genreId = action.payload.id;
//         },
//         searchName: (state, action) => {
//             state.searchMovie = action.payload;
//         },
//     },
//     extraReducers: builder =>
//         builder
//             .addCase(getMovies.fulfilled, (state, action) => {
//                 state.movies = action.payload.results;
//
//                 if (action.payload.total_pages < 500) {
//                     state.maxPage = action.payload.total_pages;
//                 } else {
//                     state.maxPage = 500;
//                 }
//             })
//             .addCase(getMovieById.fulfilled, (state, action) => {
//                 state.choozenMovie = action.payload;
//             })
//             .addCase(getByName.fulfilled, (state, action) => {
//                 state.movies = action.payload.results;
//                 state.maxPage = action.payload.total_pages;
//             })
//             .addDefaultCase((state, action) => {
//                 const [type] = action.type.split('/').splice(-1);
//                 if (type === 'rejected') {
//                     state.errors = action.payload;
//                 } else {
//                     state.errors = null;
//                 }
//             })
// });
//
// const {reducer: moviesListReducer, actions: {filterByGenre, searchName}} = moviesListSlice;
//
// const moviesListActions = {
//     getMovies,
//     getMovieById,
//     getByName,
//     filterByGenre,
//     searchName,
//     };
//
// export {
//     moviesListActions,
//     moviesListReducer
// }