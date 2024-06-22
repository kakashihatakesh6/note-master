import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from './slices/counter/index'
import { searchSlice } from './slices/search';
import { newsSlice } from './slices/news';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        search: searchSlice.reducer,
        news: newsSlice.reducer,
    }
});

export default store;