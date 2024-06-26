import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import SongReducer from "./feature/songSlice"
import CreateSongReducer from "./feature/createSongSlice"
import DeleteSongReducer from "./feature/deleteSongSlice"
import authreducer from './feature/authSlice'
import SongDetailReducer from "./feature/songDetailSlice"
import updateSongReducer from "./feature/updateSongSlice"
import searchSongReducer from "./feature/searchSong"
import favoriteReducer from "./feature/favoriteSlice"
import { watchFetchSongs } from "./sagas/songSaga";
import { watchCreateSong } from "./sagas/createSongSaga";
import { watchFetchAlbums } from "./sagas/albumFetchSaga";
import { watchSongDetail } from "./sagas/SongDetailSaga";
import { watchDeleteSong } from "./sagas/deleteSongSaga";
import { watchUpdateSong } from "./sagas/updateSongSaga";
import { watchSearch } from "./sagas/searchSongSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:{
    song:SongReducer,
    createSong: CreateSongReducer,
    songDetail:SongDetailReducer,
    deleteSong: DeleteSongReducer,
    searchSong: searchSongReducer,
    updateSong: updateSongReducer,
    favorite: favoriteReducer,
    auth: authreducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  }
})

sagaMiddleware.run(watchFetchSongs);
sagaMiddleware.run(watchFetchAlbums);
sagaMiddleware.run(watchCreateSong);
sagaMiddleware.run(watchSongDetail);
sagaMiddleware.run(watchDeleteSong);
sagaMiddleware.run(watchUpdateSong);
sagaMiddleware.run(watchSearch);


export default store;