import React from "react";
import { Card } from "semantic-ui-react";

const Weather = ({ weatherInfo }) => {
  return (
      
    <div className="main">
      <p className="header">{weatherInfo.name}</p>
      <div className="flex">
        <p className="temp">Temprature: {weatherInfo.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherInfo.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherInfo.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
  );
};

export default Weather;
