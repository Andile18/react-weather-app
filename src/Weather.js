import React from "react";
import "./Weather.css";
export default function Weather (){
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
    
        
        <h1>Cape Town </h1> 

        <ul>
           
         <li> Tuesday 18:30</li>
         <li> Rainy </li>

        </ul>
       <div className="row mt-3">
       <div className="col-6"> 
       <div className="clearfix">
       <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" 
       alt="raining" />
       
       
      
       <span className="temperature">6</span>
       <span className="units">°C</span> 
    
    
       
 </div>
    <div className="col-6">

    <ul>
        <li> Precipitation:70% </li>
        <li> Humadity:97% </li>
        <li>Wind:19km/h </li>
     </ul>

</div>
    </div>
    </div>
    </div>
        
    );
}