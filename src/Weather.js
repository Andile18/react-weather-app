import React, {useState} from "react";
import FormatDate from  "./FormatDate";
import "./Weather.css";
import axios from "axios";


export default function Weather (props){
  const [ weatherData, setweatherData] = useState({ ready: false });
    

     function handleResponse (response){
        console.log (response.data);
        setweatherData({
                       ready: true,
            temperature:response.data.main.temp,
                       humadity: response.data.main.humadity,  
                       date: new Date(response.data.dt * 1000),
                       description: response.data.weather[0].description,
                       iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
                       wind: response.data.wind.speed,
                        City: response.data.name});
        
    }
    

    if (weatherData.ready){
            return (
                <div className="Weather"> 
        
        
                <form> 
                <div className="row"> 
                <div className="col-9">
        
                    <input type ="search" 
                    placeholder ="Enter a city.."
                    className ="form-control" 
                    autoFocus="on"
                    />
        
                    </div>
                    <div className="col-3">
        
                    <input type ="submit" 
                    className ="btn btn-primary w-100"
                     value ="Search" />
                    
                </div>
                </div>
                </form>
            
                
                <h1>{weatherData.City}</h1> 
        
                <ul>   
                <li> 
                  <FormatDate date={weatherData.date} />
                  </li>
                <li className="text-capitalize">{weatherData.description}</li>
                </ul>

               <div className="row mt-3">
               <div className="col-6"> 
               <div className="clearfix">
               <img src={weatherData.iconUrl}
               alt={weatherData.description}
              />
               
               
              
             <span className="temperature"> { Math.round(weatherData.temperature )}</span>
               <span className="units">°C</span> 
            
            
               
            </div>
            <div className="col-6">
        
                <ul>
                <li>Humadity:{weatherData.humadity}% </li>
                <li>Wind:{weatherData.wind}km/h </li>
                </ul>
         
            </div>
            </div>
            </div>
            </div>
                
            );

        
    }else{

    
    const apiKey= "d0fb080483e20b38f546f3709468468e";
   let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   
    
    return "Loading..";
    }
      }