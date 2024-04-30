import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    searchQuery:'',
}

const searchSongSlice = createSlice({
    name:"searchSong",
    initialState,
    reducers: {
        setSearchQuery: (state,action) =>{
            state.searchQuery = action.payload;
        }
    }
})

export const {setSearchQuery} = searchSongSlice.actions;

export default searchSongSlice.reducer;