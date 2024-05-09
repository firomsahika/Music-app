import {put , takeLatest, call, select} from "redux-saga/effects";
import axios from 'axios';
import { fetchAlbumFailure, fetchAlbumSuccess } from "../feature/songSlice";



export const fetchAlbumRequest = () => ({
    type: 'FETCH_SONGS_REQUEST',
  });

function* fetchAlbum(action){
    try{
      const response = yield call(axios.get,'https://json-server-ubip.onrender.com/albums',{
      });
      console.log(response.data)
      yield put(fetchAlbumSuccess(response.data));

    }catch(error){
        console.error("Fatch error");
        yield put(fetchAlbumFailure({ message: error.message }));

    }
}

export function* watchFetchAlbums (){
    yield takeLatest('FETCH_SONGS_REQUEST', fetchAlbum)
}
