import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteCount: 0,
    favorites:[],
}

const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        incrementFavoriteCount: (state) => {
            state.favoriteCount += 1;
          },
        decrementFavoriteCount: (state) => {
            state.favoriteCount -= 1;
          },
        addToFavorite: (state, action) => {
            const song = action.payload;
            if (!state.favorites.some((favSong) => favSong.id === song.id)) {
              state.favorites.push(song);
            }
          },
        removeFromFavorite: (state, action) => {
            const id = action.payload;
            state.favorites = state.favorites.filter((song) => song.id !== id);
          },
    }
})


export const { incrementFavoriteCount , decrementFavoriteCount, addToFavorite, removeFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
