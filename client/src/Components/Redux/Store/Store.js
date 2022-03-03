// Whole Global State of MyDisney

import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from '../Reducers/MovieReducer';

export const Store = configureStore({
    reducer: {
        movie: MovieReducer
    },
});
