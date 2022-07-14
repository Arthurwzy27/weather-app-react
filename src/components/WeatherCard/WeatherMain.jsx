import React, { useState } from 'react';
import Search from './Search';
import City from './City';

import './WeatherMain.scss';


const WeatherMain = () => {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState();

  const search = e => {
    if (e.key === 'Enter') {
      fetch(`${process.env.REACT_APP_API_URL}q=${query}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCity(data);
        setQuery('');
      })
    }
  };

  return (
    <div className='weathermain-container'>
      <h1>What's the weather ?</h1>
      {/* <Search
        search={search}
        onKeyDown={onKeyDown}
      /> */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search for a city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      <div className="city-container">
        <City weatherData={city} />
      </div>
    </div>
  )
}

export default WeatherMain
