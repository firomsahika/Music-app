import { put, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';
import { authenticateFailure, authenticateSuccess } from './feature/authSlice';


export const authenticateRequest=()=>({
    type:'AUTHENTICATE_REQUEST',
})

function* authenticate(action){
    try{
        const response = yield call(axios.post, "https://accounts.spotify.com/authorize", action.payload)
        const {access_token} = response.data;
        yield put(authenticateSuccess( access_token));

    } catch(error){
        yield put(authenticateFailure(error))
    }
}

export function* watchAuthentication (){
  yield takeLatest('AUTHENTICATE_REQUEST',authenticate)
}
