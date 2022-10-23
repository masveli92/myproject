import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genre: [],
    errors: null,
};


const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genre;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll
};

export {
    genreActions,
    genreReducer
}