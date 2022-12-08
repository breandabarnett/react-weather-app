import React from "react";
import FormattedDate from "./FormattedDate";

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
        <div className="col-6 p-0">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
        </div>
        <div className="col-6">
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