import {put , takeLatest, call} from "redux-saga/effects";
import axios from "axios";
import  { setSearchQuery } from "../feature/searchSong";

export const fetchSearchSong = () => ({
    type: 'WATCH_SEARCH_REQUEST',
   
  });


function* searchSong(action){
    try {
        const {query} = action.payload;
        const res = yield call(axios.get,`http:localhost:3000/tracks?search=${query}`)

        yield put(setSearchQuery(res.data));
    } catch (error) {
        console.error('Search error:', error.message);
    }

}


export function* watchSearch(){
    yield takeLatest("WATCH_SEARCH_REQUEST",searchSong)
}