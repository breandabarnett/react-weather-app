import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-left ps-2">
              <WeatherIcon code={props.data.icon} />
            </span>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
        </div>
        <div className="col-6 mt-4">
          <ul>
            <li>Feels Like: {Math.round(props.data.feelsLike)} ºC</li>
            <li>
              Humidity: {props.data.humidity}
              {""}%
            </li>
            <li>
              Wind: {Math.round(props.data.wind)} {""}mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
