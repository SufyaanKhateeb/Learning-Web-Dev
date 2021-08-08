import { useSelector } from 'react-redux';

const WeatherCard = () => {
    const placeData = useSelector(state => state.placeData);
    const theme = useSelector(state => state.theme);
  return (
    <div className="container">
      <div className="offset-md-4 col-12 col-md-4 weather">
        <div className={theme?"card card-dark":"card"}>
          {placeData.location ? (
            <div>
              <img src={placeData.current.condition.icon} alt="" />
              <div className="temperature">{placeData.current.temp_c}°</div>
              <div className="desc">{placeData.current.condition.text}</div>
              <div className="place">{placeData.location.name}</div>
              <div className="container">
                <div className="row data-container">
                  <div className={theme?"col box box-dark":"col box"}>
                    <div className="title">Wind Speed</div>
                    <div className="data">
                      {placeData.current.wind_kph}
                      <span className="unit">KM</span>
                    </div>
                  </div>
                  <div className={theme?"col box box-dark":"col box"}>
                    <div className="title">Humidity</div>
                    <div className="data">
                      {placeData.current.humidity}
                      <span className="unit">%</span>
                    </div>
                  </div>
                  <div className={theme?"col box box-dark":"col box"}>
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
  );
};

export default WeatherCard;
