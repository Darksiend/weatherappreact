import React from "react";
import SearchBar from "../../components/SearchBar";
import "./style.css";
import FullWeather from "../../components/FullWeather";
export const Home = () => {
  return (
    <div className="Home">
      <SearchBar />
      <FullWeather />
    </div>
  );
};

export default Home;
