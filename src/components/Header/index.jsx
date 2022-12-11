import React from "react";
import "./style.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo">My Weather App</div>
      <div className="buttons">
        <Link to="/">
          <Button label="Home"> </Button>
        </Link>

        <Button label="Favorites"></Button>
      </div>
    </div>
  );
};

export default Header;
