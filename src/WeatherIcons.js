import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcons(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const iconColor = {
    CLEAR_DAY: "#FFC300",
    CLEAR_NIGHT: "#1A5276",
    PARTLY_CLOUDY_DAY: "#99A3A4",
    PARTLY_CLOUDY_NIGHT: "#616A6B",
    CLOUDY: "#99A3A4",
    RAIN: "#85C1E9",
    SNOW: "#D4E5F1",
    FOG: "#808B96",
  };

  return (
    <ReactAnimatedWeather
      icon={iconMapping[props.code]}
      color={iconColor[iconMapping[props.code]]}
      size={64}
      animate={true}
    />
  );
}
