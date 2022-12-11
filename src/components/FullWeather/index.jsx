import React from "react";
import { Button } from "primereact/button";

export const FullWeather = () => {
  return (
    <div className="FullWeather">
      <div className="actualWeather"></div>
      <Button label="Add to Fav"> </Button>
    </div>
  );
};

export default FullWeather;
