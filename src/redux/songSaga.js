import {put , takeLatest, call, select} from "redux-saga/effects";
import axios from 'axios';
import { fetchSongsFailure,fetchSongsSuccess } from "./feature/songSlice";

const API_ENDPOINT = 'https://api.spotify.com/v1';

export const fetchDataRequest = () => ({
    type: 'FETCH_SONGS_REQUEST',
  });


function* fetchSongs(action){
    try{
      // const accessToken = yield select((state)=>state.auth.accessToken);
      const response = yield call(axios.get,'http://localhost:3000/tracks',{
      });
      console.log(response.data)
      yield put(fetchSongsSuccess(response.data));

    }catch(error){
        console.error("Fatch error");
        yield put(fetchSongsFailure({ message: error.message }));

    }
}

export function* watchFetchSongs (){
    yield takeLatest('FETCH_SONGS_REQUEST', fetchSongs)
}