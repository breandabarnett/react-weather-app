import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  console.log(props.data);

  let celsius_feels_like = Math.round(props.data.feelsLike);
  let fahrenheit_feels_like = Math.round((props.data.feelsLike * 9) / 5 + 32);

  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 mb-3">
        <div className="col-7">
          <div className="clearfix">
            <span className="float-left ps-2">
              <WeatherIcon code={props.data.icon} size={62} />
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
        <div className="col-5 mt-3">
          <ul>
            <li>
              Feels like:{" "}
              {props.unit === "celsius" ? (
                <span>{celsius_feels_like} ºC</span>
              ) : (
                <span>{fahrenheit_feels_like} ºF</span>
              )}
            </li>
            <li>
              Humidity: {props.data.humidity}
              {""}%
            </li>
            <li>
              Wind: {Math.round(props.data.wind)} {""}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
