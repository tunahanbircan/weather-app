import { useState } from "react";
import { baseService } from "./api/baseService";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  //requests
  const onSearch = () => {
    baseService.fetchByCityName(cityName).then((res) => {
      setSelectedCity(res.data);
    });
  };

  const getDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date();

    return today.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="App" class="body">
        <header className="weather">
          <input
            //attributes
            id="weatherInput"
            type="text"
            placeholder="Şehir ismi giriniz!"
            //events
            onChange={(e) => {
              setCityName(e.target.value);
            }}
          />
          <button onClick={onSearch}>Search</button>
        </header>
        {selectedCity ? (
          <div className="box">
            <p className="box-item">{selectedCity.name}</p>
            <p className="box-item date">{getDate()}</p>
            <p className="box-item temp">
              {parseFloat(selectedCity.main.temp - 273.15).toFixed(2)} ° C
            </p>
            <p className="box-item">
              {selectedCity.weather[0].description.split(" ").map((w) => {
                return `${w.charAt(0).toUpperCase() + w.slice(1)} `;
              })}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
