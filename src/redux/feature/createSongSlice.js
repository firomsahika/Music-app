import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songsList:[],
    loading: false,
    error: null,
}
const createSongSlice = createSlice({
    name:'createSong',
    initialState,
    reducers:{
        createSongSuccess:(state,action)=>{
           state.songsList.push(action.payload);
           state.loading = false;
           state.error = null;
        },
        createSongFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
         }
    }
})

export const { createSongFailure,createSongSuccess} = createSongSlice.actions;
export default createSongSlice.reducer;