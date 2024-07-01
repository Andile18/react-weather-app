import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function Forecast(){
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