import React from "react";
import "./style.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo">My Weather App</div>
      <div className="buttons">
        <Button label="Home"></Button>
        <Button label="Favorites"></Button>
      </div>
    </div>
  );
};

export default Header;
