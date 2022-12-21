import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "2713dc334920f2c6ffb470ta385oa3b9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 px-1">
              <input
                type="search"
                placeholder="search for a location..."
                className="form-control input-bar"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 px-1">
              <button type="submit" className="btn btn-search w-100">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
        <WeatherForecast coordinates={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    search();
    return (
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#b9e6e6"
        barColor="#fda087"
      />
    );
  }
}
