import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import SongReducer from "./feature/songSlice"
import authreducer from './feature/authSlice'
import { watchFetchSongs } from "./songSaga";

import { watchFetchAlbums } from "./albumFetchSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:{
    song:SongReducer,
    auth: authreducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  }
})

sagaMiddleware.run(watchFetchSongs);
sagaMiddleware.run(watchFetchAlbums);

export default store;