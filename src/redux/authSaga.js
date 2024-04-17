import { put, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';
import { authenticateFailure, authenticateSuccess } from './feature/authSlice';

function *authenticate(action){
    try{
        const response = yield call(axios.post, "https://accounts.spotify.com/authorize", action.payload)
        const {access_token} = response.data;
        yield put(authenticateSuccess({ accessToken: access_token }));

    } catch(error){
        yield put(authenticateFailure({ error: error.message }))
    }
}

export function* watchAuthentication (){
  yield takeLatest('AUTHENTICATE_REQUEST',authenticate)
}
