import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name:'song',
    initialState:{
        songsList:[],
        song:{},
        error:null

    },
    reducers:{
        fetchSongsSuccess:(state,action)=>{
            state.songsList = action.payload;
            state.error = null;
        },
        fetchSongsFailure:(state, action)=>{
            state.error= action.payload.err;
            state.songsList = null;
        },
        
    }
})

export const {fetchSongsFailure, fetchSongsSuccess}  = songSlice.actions;
export default songSlice.reducer;