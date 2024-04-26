import { put,takeLatest,call } from "redux-saga/effects";
import axios from "axios";
import { updateSongFailure,updateSongSuccess } from "./feature/updateSongSlice";

export const updateSongRequest = (id,formData) => ({
    type:'UPDATE_SONG_REQUEST',
    payload:{id, formData},
});

function* updateSong(action){
   try {
    const {id, formData} = action.payload;
    const songId = id.replace(":", "");
    const response = yield call(axios.put,`http://localhost:3000/tracks/${songId}`, formData)
     yield put(updateSongSuccess(response.data))

   } catch (error) {
    console.error("Update song error:", error);
    yield put(updateSongFailure({ message: error.message }));
   }
}


export function* watchUpdateSong(){
    yield takeLatest('UPDATE_SONG_REQUEST', updateSong)
}