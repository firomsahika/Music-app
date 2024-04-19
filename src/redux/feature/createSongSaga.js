import {put , takeLatest, call, select} from "redux-saga/effects";
import axios from 'axios';
import { createSongFailure, createSongSuccess } from "./createSongSlice";



export const createSongRequest = (formData) => ({
    type: 'CREATE_SONG_REQUEST',
    payload:formData,
  });


function* createSongs(action){
    try{
      // const accessToken = yield select((state)=>state.auth.accessToken);
      const response = yield call(axios.post, 'http://localhost:3000/tracks', action.payload);
      console.log(response.data)
      yield put(createSongSuccess(response.data));

    }catch(error){
        console.error("post error");
        yield put(createSongFailure({ message: error.message }));

    }
}

export function* watchCreateSong (){
    yield takeLatest('CREATE_SONG_REQUEST', createSongs)
}