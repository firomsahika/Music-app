import {put , takeLatest, call, select} from "redux-saga/effects";
import axios from 'axios';

const API_ENDPOINT = 'https://api.spotify.com/v1';

export const fetchDataRequest = () => ({
    type: 'FETCH_SONGS_REQUEST',
  });


function* fetchSongs(action){
    try{
      const accessToken = yield select((state)=>state.auth.accessToken);
      const response = yield call(axios.get,`${API_ENDPOINT}/search?q=${action.payload}&type=track`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
      });
      yield put(fetchSongSuccess(response.data.tracks.items));

    }catch(error){
        yield put(fetchSongsFailure(error));

    }
}

export function* watchFetchSongs (){
    yield takeLatest('FETCH_SONGS_REQUEST', fetchSongs)
}