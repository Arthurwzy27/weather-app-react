import React from 'react';
import './City.scss';

const City = ({weatherData}) => {
  return (
    <div>
    {(weatherData.cod !== '404') ? (
<>
  <img src="" alt='country-flag' />
      <h2>{weatherData.city.name} ({weatherData.city.country})</h2>
      <h3>{weatherData.list[0].main.temp}°</h3>
      <img src="" alt={weatherData.list[0].weather[0].description} />
      <p>{weatherData.list[0].weather[0].description}</p>
      <p>Min: 28°</p>
      <p>Max: 34°</p>
      <p>Wind: 8km/h WE</p>
</>
    ) : (weatherData.message)}


      {/* <img src="" alt='country-flag' />
      <h2>Paris</h2>
      <h3>32°</h3>
      <img src="" alt="Sunny" />
      <p>Sunny</p>
      <p>Min: 28°</p>
      <p>Max: 34°</p>
      <p>Wind: 8km/h WE</p> */}
    </div>
  )
}

export default City
