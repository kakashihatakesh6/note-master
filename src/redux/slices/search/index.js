import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: 'india',
    },
    reducers: {
        searchQuery: (state, action) => {
            state.value = action;
        }, 
    }
});

export const { searchQuery } = searchSlice.actions;
export default searchSlice.reducer;