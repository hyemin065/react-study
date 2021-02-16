import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather(){
    const KEY = '162e461eec9f4717a6f4c16182a714f3';
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");

    function getLocation(){
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lot = position.coords.longitude;
            getWeather(lat,lot)
        })
    }

    async function getWeather(lat,lot){
        if(lat && lot){
            let WeatherAPI = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${KEY}&units=metric`);
            console.log(WeatherAPI.data)
            setWeather(WeatherAPI.data.weather[0].main);
            setTemp(WeatherAPI.data.main.temp);
        }
        
    }
        
    
    useEffect(()=>{
        getLocation()
    },[]);

    return(
        <>
            <div>{weather}</div>
            <div>{temp}</div>
        </>
    );
}

export default Weather;