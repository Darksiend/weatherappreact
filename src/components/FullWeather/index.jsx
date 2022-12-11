import React from "react";
import { Button } from "primereact/button";
import "./style.css";
export const FullWeather = () => {
  return (
    <div className="FullWeather">
      <div className="upper-container">
        <div className="actualWeather">
          <img src="" alt="" className="weatherCondPicture" />
          <div className="cityName">Tel Aviv</div>
          <div className="actualTemp">38</div>
        </div>
        <Button label="Add to Fav"> </Button>
      </div>
      <div className="text-weather-conditions">Sunny</div>
      <div className="five-days-cards-container">
        <div className="day-weather-card"></div>
        <div className="day-weather-card"></div>
        <div className="day-weather-card"></div>
        <div className="day-weather-card"></div>
        <div className="day-weather-card"></div>
      </div>
    </div>
  );
};

export default FullWeather;
