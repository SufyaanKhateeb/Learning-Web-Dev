import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calcard from "./components/calcard";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Calorie Card</h1>
      <div className="App">
        <Calcard calorie="56" food="Chips" />
        <Calcard calorie="420" food="Pizza" />
        <Calcard calorie="69" food="Burger" />
        <Calcard calorie="80" food="Chocolate" />
        <Calcard calorie="60" food="Icecream" />
      </div>
    </div>
  );
}

ReactDOM.render(<App></App>, document.querySelector("#main"));
