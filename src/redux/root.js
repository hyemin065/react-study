import {weatherAPI} from './weather';
import {all} from 'redux-saga/effects';

export function* rootSaga(){
    yield all([weatherAPI()]);
}

export default rootSaga;