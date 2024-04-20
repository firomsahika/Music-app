import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    songs:[],
    loading:false,
    error:null
}
const deleteSongSlice = createSlice({
    name: 'deleteSong',
    initialState,
    reducers:{
         deleteSongSuccess:(state,action) =>{
             state.loading = false,
             state.songs  = state.songs.filter(song => song.id !== action.payload)
         },
         deleteSongFailure:(state, action)=>{
            state.error = action.payload
            state.loading = false
         }
    }
})

export const {deleteSongFailure, deleteSongSuccess}  = deleteSongSlice.actions;
export default deleteSongSlice.reducer;