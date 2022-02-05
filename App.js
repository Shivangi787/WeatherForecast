import React, { useState, useEffect } from "react";
import Weather from "./Components/Weather";
import { Dimmer, Loader } from "semantic-ui-react";
import "./App.css";

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=16fb86244a48007684cf111347fb6ab9`
      )
        .then((res) => res.json())
        .then((data) => {
          setInfo(data);
          console.log(data);
        });
    };
    fetchWeatherData();
  }, [lat, long]);
  return (
    <div className="App">
      {info.main !== undefined ? (
        <Weather weatherInfo={info} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
};

export default App;
