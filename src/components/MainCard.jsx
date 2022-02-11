import './MainCard.scss';
import React, { useState, useEffect } from 'react';

const Maincard = () => {

  const [lat, setLat] = useState('41.39')
  const [lon, setLon] = useState('2.15')
  const [city, setCity] = useState('Barcelona')
  // const [query, setquery] = useState('')
  // const [weather, setWeather] = useState('')
  const base_url = "api.openweathermap.org/data/2.5/weather?"
  const weatherCategory = ['few clouds'];


  useEffect(() => {
    fetch(`${base_url}lat=${lat}&lon=${lon}&appid=${process.env.API_key}`)
    .then(res => res.json())
    .then(result => setCity
      (result))
  },[lat, lon]);


  return(
    <div className="main">
      <h1>{city}</h1>

      <h3> {weatherCategory} </h3>

      <p>Latitude: {lat} - Longitude: {lon}</p>

      <img className="weather-icon" src={require('../img/few-cloud.png')} alt="Few-cloud"/>

      <div className="temperature">
        <p>20°C</p>
        <p>Feels like 18°C</p>
      </div>
    </div>
  )
};

export default Maincard;
