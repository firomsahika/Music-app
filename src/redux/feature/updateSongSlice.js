import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songList : [],
    loading:false,
    error:null
}
const updateSongSlice = createSlice({
    name:'updateSong',
    initialState,
    reducers:{
        updateSongSuccess:(state, action) =>{
          const updatedSong = action.payload;
          const index = state.songList.findIndex(song => song.id === updatedSong);

          if(index !== -1){
            state.songList[index] = updatedSong;
          }
          state.loading = false;
          state.error = null;
        },

        updateSongFailure:(state,action) =>{
           state.loading=false;
           state.error = action.payload;
        }
    }
})

export const {updateSongFailure, updateSongSuccess} = updateSongSlice.actions;
export default updateSongSlice.reducer;