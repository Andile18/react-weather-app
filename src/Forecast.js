import React, { useState } from "react";

import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function Forecast(props){
    let [loaded, setLoaded] = useState (false);
    let [weatherData, setweatherData] = useState (null);

    
    function handleResponse(response){
    
    setweatherData(response.data.daily);
    setLoaded(true);
}
   

if (loaded){
    console.log(weatherData);
    return(
        <div className="Forecast">    
        <div className="row">
            <div className="col"> 
            <ForecastDay  data={weatherData[0]} />

        </div>
        <div className="col"> 
            <ForecastDay  data={weatherData[1]} />
            
        </div>
        <div className="col"> 
            <ForecastDay  data={weatherData[2]} />
            
        </div>
        <div className="col"> 
            <ForecastDay  data={weatherData[3]} />
            
        </div>
        <div className="col"> 
            <ForecastDay  data={weatherData[4]} />
            
        </div>
        <div className="col"> 
            <ForecastDay  data={weatherData[5]} />
            
        </div>
        <div className="col"> 
            <ForecastDay  data={weatherData[6]} />
            
        </div>
        </div>
        </div>
    
 );  
 
}
else { 
    
      

let apiKey= "3f6be1c407b0d9d1933561808db358ba";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (null);
       
}
}

