import {put , takeLatest, call} from "redux-saga/effects";
import axios from 'axios';
import { deleteSongFailure,deleteSongSuccess } from "../feature/deleteSongSlice";

export const deleteSongRequest = (id) =>({
    type:'DELETE_SONG',
    payload: {id},
})

function* deleteSong(action){
    try {
        const { id } = action.payload;
        const songId = id.replace(":", "");
        const response = yield call(axios.delete, `https://json-server-ubip.onrender.com/tracks/${songId}`);
        yield put(deleteSongSuccess(response.data));
        
    } catch (error) {
        console.log("Delete song error!",error);
        yield put(deleteSongFailure({ message: error.message }));
    }
}

export function* watchDeleteSong(){
    yield takeLatest('DELETE_SONG', deleteSong)
}