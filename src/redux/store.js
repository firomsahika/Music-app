import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import SongReducer from "./feature/songSlice"
import CreateSongReducer from "./feature/createSongSlice"
import DeleteSongReducer from "./feature/deleteSongSlice"
import authreducer from './feature/authSlice'
import SongDetailReducer from "./feature/songDetailSlice"
import { watchFetchSongs } from "./songSaga";
import { watchCreateSong } from "./feature/createSongSaga";
import { watchFetchAlbums } from "./albumFetchSaga";
import { watchSongDetail } from "./SongDetailSaga";
import { watchDeleteSong } from "./deleteSongSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:{
    song:SongReducer,
    createSong: CreateSongReducer,
    songDetail:SongDetailReducer,
    deleteSong: DeleteSongReducer,
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

export default store;