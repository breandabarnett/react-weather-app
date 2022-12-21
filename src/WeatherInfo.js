import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  console.log(props.data);

  let celsius_feels_like = Math.round(props.data.feelsLike);
  let fahrenheit_feels_like = Math.round((props.data.feelsLike * 9) / 5 + 32);

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8 ps-2 pe-1">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="text-capitalize mb-3">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-4 pe-2">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </div>
      </div>
      <div className="row">
        <div className="col-7 px-0 current-temp">
          <div className="clearfix">
            <span className="float-left ps-2">
              <WeatherIcon code={props.data.icon} size={60} />
            </span>
            <span className="float-left">
              <WeatherTemperature
                celsius={props.data.temperature}
                unit={props.unit}
                setUnit={props.setUnit}
              />
            </span>
          </div>
        </div>
        <div className="col-5 ps-0 pe-2 description">
          <ul>
            <li>
              Feels like:{" "}
              {props.unit === "celsius" ? (
                <span>{celsius_feels_like} ºC</span>
              ) : (
                <span>{fahrenheit_feels_like} ºF</span>
              )}{" "}
              <i class="fa-solid fa-temperature-three-quarters"></i>
            </li>
            <li>
              Humidity: {props.data.humidity}
              {""}% <i class="fa-solid fa-droplet"></i>
            </li>
            <li>
              Wind: {Math.round(props.data.wind)} {""}km/h{" "}
              <i class="fa-solid fa-wind"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
