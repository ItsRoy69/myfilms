import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: null,
  hollywood: null,
  newTo: null,
  kidsTv: null,
  original: null,
  trending: null
}

const MovieReducer = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setDisneyMovies: (state, action) => {
            state.popular = action.payload.popular;
            state.hollywood = action.payload.hollywood;
            state.trending = action.payload.trending;
            state.newTo = action.payload.newTo;
            state.kidsTv = action.payload.kidsTv;
            state.original = action.payload.original;
        },
    },
});

export const { setDisneyMovies } = MovieReducer.actions;

export const selectPopular = (state) => state.movie.popular;
export const selectHollywood = (state) => state.movie.hollywood;
export const selectTrending = (state) => state.movie.trending;
export const selectNewTo = (state) => state.movie.newTo;
export const selectKidsTv = (state) => state.movie.kidsTv;
export const selectOriginal = (state) => state.movie.original;

export default MovieReducer.reducer;
