import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';


//action type
const PLUS = "PLUS";
const MINUS = "MINUS";
const PLUS_SAGA = "PLUS_SAGA";
const MINUS_SAGA = "MINUS_SAGA";

//action creator
export const plus = () =>({type : PLUS});
export const minus = () =>({type : MINUS});

export const plusSaga = () =>({type:PLUS_SAGA});

export const minusSaga = () =>({type:MINUS_SAGA});

function* plusSagaSaga(){
    yield delay(2000);
    yield put(plus())
}

function* minusSagaSaga(){
    yield delay(2000);
    yield put(minus())
}

export function* counterSaga(){
    yield takeEvery(PLUS_SAGA, plusSagaSaga);
    yield takeLatest(MINUS_SAGA, minusSagaSaga);
}


//initial state
const initialState = 0;


//reducer
export default function Counter(state=initialState, action){
    switch(action.type){
        case PLUS:
            return state + 1;
        case MINUS:
            return state - 1;
    
        default:
            return state
    }
}
