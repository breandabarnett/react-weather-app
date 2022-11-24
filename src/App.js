import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://breanda.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Breanda Barnett
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/breandabarnett/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
