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
export const weatherData = (lat,lon) => ({
    type:WEATHER_DATA,
    lat,
    lon   
})



async function api(lat, lon){
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=162e461eec9f4717a6f4c16182a714f3&units=metric`);
    return data;
}

//api 받아오기
function* getWeather({lat, lon}){
    console.log(lat, lon)
    try{
        const {data} = yield call(() => api(lat,lon));
        if(data){
            yield put(weatherAction(data))
        }
    }catch(error){
        console.log(error)
    }
}


export function* weatherAPI(action){
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