import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {weatherData} from '../redux/weather';

function Weather(){
    // const API_KEY = "162e461eec9f4717a6f4c16182a714f3";
    // const [weather, setWeather] = useState("");
    // const [temp, setTemp] = useState("");   

    const data = useSelector(state=>state);
    console.log(data)    
    const dispatch = useDispatch();

    //lat, lon 받아오기
    // function geoLocation(){
    //     navigator.geolocation.getCurrentPosition((position) =>{
    //         let lat = position.coords.latitude;
    //         let lon = position.coords.longitude;
    //         console.log(lat,lon)
    //         WeatherAPI(lat,lon)
    //     })
    // }
    

    
    //api 받아오기
    // async function WeatherAPI(lat, lon){
    //     try{
    //         const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    //         console.log(res)
    //         const data = res.data.weather[0].main;
    //         const temps = res.data.main.temp;
    //         setWeather(data);
    //         setTemp(temps);
    //         console.log(res)
    //         console.log(data)
    //     }catch(error){
    //         console.log(error)
    //     }
    // } 

    const abc = () =>{
        dispatch(weatherData());
    }

    useEffect(()=>{
        
        
        abc();
    },[])


 
    return(
        <>
            <div>{data ? (
                <>
                    <div>{data.data.main.temp}</div>
                    <div>{data.data.weather[0].main}</div>
                </>
            ) : null}</div>
        </>
    );

}


export default Weather;