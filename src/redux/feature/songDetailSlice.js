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
        songDetailRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        SongDetailSuccess: (state, action) => {
            console.log("Action Payload:", action.payload);
            state.loading = false;
            state.song = action.payload;
        },
        SongDetailFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { SongDetailFailure, SongDetailSuccess,songDetailRequest } = songDetailSlice.actions;
export default songDetailSlice.reducer;
