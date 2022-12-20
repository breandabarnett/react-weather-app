import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer className="text-center">
          <div>
            <a
              href="https://github.com/breandabarnett/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced
            </a>{" "}
            on GitHub <i class="fa-solid fa-cloud"></i> Coded & Designed by{" "}
            <a
              href="https://breanda.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Breanda Barnett
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
