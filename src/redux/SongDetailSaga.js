import {put , takeLatest, call} from "redux-saga/effects";
import axios from 'axios';
import { SongDetailFailure, SongDetailSuccess } from "./feature/songDetailSlice";


export const fetchDetailSong = (id) => ({
    type: 'FETCH_SONG_REQUEST',
    payload: {id},
  });

function* fetchSong(action) {
    try {
        const  {id}  = action.payload;
        const songId = id.replace(":", "");
        const response = yield call(axios.get,`http://localhost:3000/tracks/${songId}`);

        yield put(SongDetailSuccess(response.data));
    } catch (error) {
        console.error("Fetch error:", error.message);
        yield put(SongDetailFailure({ message: error.message }));
    }
}

export function* watchSongDetail() {
    yield takeLatest('FETCH_SONG_REQUEST', fetchSong);
}
