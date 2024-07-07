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
       
      
        
        </div>
        </div>
    
 );  
 
}
else { 
    
      

let apiKey= "d0fb080483e20b38f546f3709468468e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (null);
       
}
}

