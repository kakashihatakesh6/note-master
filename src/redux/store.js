import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './slices/news';

const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
    }
});

export default store;