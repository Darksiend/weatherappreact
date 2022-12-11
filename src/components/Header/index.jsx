import React from "react";
import "./style.css";
import { Button } from "primereact/button";

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
