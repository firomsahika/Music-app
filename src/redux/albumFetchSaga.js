import {put , takeLatest, call, select} from "redux-saga/effects";
import axios from 'axios';
import { fetchAlbumFailure, fetchAlbumSuccess } from "./feature/songSlice";



export const fetchAlbumRequest = () => ({
    type: 'FETCH_SONGS_REQUEST',
  });

function* fetchAlbum(action){
    try{
      // const accessToken = yield select((state)=>state.auth.accessToken);
      const response = yield call(axios.get,'http://localhost:3000/albums',{
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