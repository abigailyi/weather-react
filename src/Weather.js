import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC`
    );
  }
  let apiKey = `1e900e7a532291ddab0851fd797f7887`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(handleResponse);

  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
