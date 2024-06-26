import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";


export default function Weatherinfo(props){
    return (
        <div className="Weatherinfo"> 


        <h1>{props.data.City}</h1> 
        
        <ul>   
        <li> 
          <FormatDate date={props.data.date} />
          </li>
        <li className="text-capitalize">{props.data.description}</li>
        </ul>

      

       <div className="row mt-3">
       <div className="col-6"> 
       <div className="clearfix">


        <div>
       <WeatherIcon code={props.data.icon} />
       </div>

      
       <div className="float-left">
       
        <WeatherTemperature celsius = {props.data.temperature} />
   </div>
    
    </div>  
    </div> 
  
    <div className="col-6">

        <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind:{props.data.wind}km/h </li>
        </ul>
 
      </div>  
    </div>
    </div>
    
    );
    }