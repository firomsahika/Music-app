import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name:'song',
    initialState:{
        songsList:[],
        albumList:[],
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
        fetchAlbumSuccess:(state,action)=>{
           state.albumList = action.payload;
           state.error = null;
        },
        fetchAlbumFailure:(state,action)=>{
            state.error = action.payload.err;
            state.albumList = null;
         }
        
    }
})

export const {fetchSongsFailure, fetchSongsSuccess,fetchAlbumFailure,fetchAlbumSuccess}  = songSlice.actions;
export default songSlice.reducer;