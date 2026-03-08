import { useState } from "react";
import "./App.css";
import cloud from "./assets/cloud.png";

function App() {

  const API_KEY = "ba14386eaa89191a9e5960d626429b97";

  const [city,setCity] = useState("");
  const [weather,setWeather] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const getWeather = async () => {

    if(!city) return;

    setLoading(true);
    setError("");

    try{

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if(data.cod !== 200){
        setError("City not found");
        setWeather(null);
      }else{
        setWeather(data);
      }

    }catch(err){
      setError("Something went wrong");
    }

    setLoading(false);

  };

  return (

    <div className="app">

      <img src={cloud} className="cloud cloud1" alt="cloud"/>
      <img src={cloud} className="cloud cloud2" alt="cloud"/>
      <img src={cloud} className="cloud cloud3" alt="cloud"/>

      <h1 className="title">Weather App</h1>

      <div className="search">

        <input
          type="text"
          placeholder="Search city..."
          onChange={(e)=>setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>

      </div>

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && weather.main && (

        <div className="card">

          <h2>{weather.name}, {weather.sys.country}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            className="icon"
            alt="weather"
          />

          <h3>{weather.main.temp}°C</h3>

          <p className="desc">{weather.weather[0].description}</p>

          <div className="extra">

            <p>Feels Like: {weather.main.feels_like}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} km/h</p>
            <p>Pressure: {weather.main.pressure} hPa</p>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;