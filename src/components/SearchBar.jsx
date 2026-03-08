import { useState } from "react";

function SearchBar({ searchWeather }) {

  const [city, setCity] = useState("");

  const submit = (e) => {

    e.preventDefault();

    if (city.trim() !== "") {
      searchWeather(city);
    }

  };

  return (

    <form onSubmit={submit} className="search">

      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button>Search</button>

    </form>

  );
}

export default SearchBar;