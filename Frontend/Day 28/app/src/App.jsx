import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  useEffect(() => {}, []);
  const updatePlace = async (place) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=f398c8712d29443f95e200034210508&q=${place}`
    )
      .then((response) => response.json())
      .then((data) => setPlaceData(data));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="form col-12">
            <input
              type="text"
              value={place}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  updatePlace(place);
                }
              }}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => updatePlace(place)}
            >
              Submit
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temperature">{placeData.current.temp_c}°</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row data-container">
                      <div className="col box">
                        <div className="title">Wind Speed</div>
                        <div className="data">
                          {placeData.current.wind_kph}
                          <span className="unit">KM</span>
                        </div>
                      </div>
                      <div className="col box">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col box">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {placeData.current.precip_mm}
                          <span className="unit">mm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h3>Search for a Place</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
