import React, {useState} from "react";

import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import Forecast from "./Forecast";

export default function Weather (props){
  const [ weatherData, setweatherData] = useState({ ready: false });
  const [city,setCity]= useState(props.defaultCity); 

     function handleResponse (response){
        console.log (response.data);
        setweatherData({
                       ready: true,
                       coordinates: response.data.coord,
            temperature:response.data.main.temp,
                       humidity: response.data.main.humidity,  
                       date: new Date(response.data.dt * 1000),
                       description: response.data.weather[0].description,
                       icon: response.data.weather[0].icon,
                       wind: response.data.wind.speed,
                        City: response.data.name});
        
    }
    

        function search (){


        const apiKey= "d0fb080483e20b38f546f3709468468e";
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
          


        }
       

         function handleSubmit(event){
          event.preventDefault();
          search();
         }



        function handleCityChange(event){
          setCity(event.target.value);

        }


    if (weatherData.ready){
            return (
                <div className="Weather"> 
        
        
                <form onSubmit={handleSubmit}> 
                <div className="row"> 
                <div className="col-9">
        
                    <input type ="search" 
                    placeholder ="Enter a city.."
                    className ="form-control" 
                    autoFocus="on"
                    onChange={handleCityChange}
                    />
        
                    </div>
                    <div className="col-3">
        
                    <input type ="submit" 
                    className ="btn btn-primary w-100"
                     value ="Search" />
                    
                </div>
                </div>
                </form>
            

                <Weatherinfo data={weatherData} />
                
                <Forecast coordinates={weatherData.coordinates} />
               
            </div>
                
            );

        
    }else{

    
   search ();
    
    return "Loading..";
    }
  }