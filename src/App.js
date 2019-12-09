import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { directive } from "@babel/types";

const App = () => {
  const APP_ID = "92c867da";
  const APP_KEY = "430b2e13b5f74eeda561b7536e06b5e6";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
