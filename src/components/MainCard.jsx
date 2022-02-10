import './MainCard.scss';
import React, { useState, useEffect } from 'react';

const Maincard = () => {

  const [lat, setLat] = useState('41.39')
  const [lon, setLon] = useState('2.15')
  const [location, setLocation] = useState('Barcelona')
  // const [query, setquery] = useState('')
  const [weather, setWeather] = useState({})
  const base_url = "api.openweathermap.org/data/2.5/weather?"


  useEffect(() => {
    fetch(`${base_url}lat=${lat}&lon=${lon}&appid=${process.env.API_key}`)
    .then(res => res.json())
    .then(result => setLocation(result))
  },[lat, lon]);


  return(
    <div className="main">

      <h1>{location}</h1>
      <p>Latitude: {lat} - Longitude: {lon}</p>
      {/* <h2>{weather}</h2> */}
    </div>
  )
};

export default Maincard;
