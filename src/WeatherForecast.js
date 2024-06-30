import React, { useState } from "react";
import "./WeatherForecast.css";
import FormatDate from "./FormatDate";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("null");

  function WeatherForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast ms-4 text-center">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return <></>
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "d0fb080483e20b38f546f3709468468e";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(WeatherForecastResponse);
    return null;
  }
}