import axios from 'axios';
import {put, takeEvery, call} from 'redux-saga/effects';

//action type
const WEATHER = "WEATHER";
const WEATHER_DATA = "WEATHER_DATA";

//action creator
export const weatherAction = (data) => ({
    type:WEATHER,    
    data
})
export const weatherData = () => ({
    type:WEATHER_DATA   
})

async function api(){
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=37.540108200000006&lon=126.6417671&appid=162e461eec9f4717a6f4c16182a714f3&units=metric`);
    return data;
}

//api 받아오기
function* getWeather(){
    try{
        const data = yield call(api);
        yield put(weatherAction(data))
    }catch(error){
        console.log(error)
    }
}


export function* weatherAPI(){
    yield takeEvery(WEATHER_DATA, getWeather);
}


//initial state
const initialState = {}

//reducer
export default function weather(state=initialState, action){
    switch(action.type){
        case WEATHER:
            return {data:action.data}
        default:
            return 
    }
}