function WeatherCard({ data }) {

  return (

    <div className="weather-card">

      <h2>{data.name}</h2>

    <img
src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
alt="weather"
/>

      <h3>{data.main.temp}°C</h3>

      <p>{data.weather[0].description}</p>

      <div className="details">

        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} km/h</p>

      </div>

    </div>

  );
}

export default WeatherCard;