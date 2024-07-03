import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";


export default function Forecast(props){


    function handleResponse(response){
      
      console.log(response.data);
    }
   

    let apiKey= "3f6be1c407b0d9d1933561808db358ba";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);


    return (
        <div className="Forecast"> 
        <div className="row">
            <div className="col"> 
            <div className="Forecast-day">Mon</div>
            <WeatherIcon code="01d" size={40} />
            <div className="Forecast-tempeeratures"> 
            <span className="Forecast-temperature-min"> 16
            </span>
            <span className="Forecast-temperature-max"> 26 
            </span>
        </div>
        </div>

       

            </div>
            </div>
    );
}