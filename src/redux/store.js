import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from './slices/counter/index'
import { searchSlice } from './slices/search';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        search: searchSlice.reducer,
    }
});

export default store;