import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    temperature: 71,
    date: "Monday 8:35 PM",
    description: "Clear",
    icon: "https://i.ibb.co/gMsgrCg/01n.png",
    humidity: 32,
    wind: 4,
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-115"
            />
          </div>
        </div>
      </form>
      <div className="weatherInfo">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temp float-left">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />
          </div>
          <div className="float-left weatherTemp">
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">ºC</a> | <a href="/">ºF</a>
            </span>
          </div>
        </div>
        <div className="col-6 weatherExtra">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
