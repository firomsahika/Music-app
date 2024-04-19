// songDetailSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    song: {},
    loading: false,
    error: null,
};

const songDetailSlice = createSlice({
    name: 'songDetail',
    initialState,
    reducers: {
    
        SongDetailSuccess: (state, action) => {
            state.loading = false;
            state.song = action.payload; // Update state with the fetched song detail data
        },
        SongDetailFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { SongDetailFailure, SongDetailSuccess,songDetailRequest } = songDetailSlice.actions;
export default songDetailSlice.reducer;
