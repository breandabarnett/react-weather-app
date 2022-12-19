import React from "react";

export default function WeatherTemperature(props) {
  const showFahrenheit = (event) => {
    event.preventDefault();
    props.setUnit("fahrenheit");
  };

  const showCelsius = (event) => {
    event.preventDefault();
    props.setUnit("celsius");
  };

  if (props.unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit" onClick={showCelsius}>
          <button type="button" className="btn btn-unit-active">
            ºC
          </button>
        </span>
        <span className="unit" onClick={showFahrenheit}>
          <button type="button" className="btn btn-unit">
            ºF
          </button>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="unit" onClick={showCelsius}>
          <button type="button" className="btn btn-unit">
            ºC
          </button>
        </span>

        <span className="unit active" onClick={showFahrenheit}>
          <button type="button" className="btn btn-unit-active">
            ºF
          </button>
        </span>
      </span>
    );
  }
}
