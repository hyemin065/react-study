import {counterSaga} from './counter2';
import {all} from 'redux-saga/effects';

export function* rootSaga(){
    yield all([counterSaga()]);
}

export default rootSaga;