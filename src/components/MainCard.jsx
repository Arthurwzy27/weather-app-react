import './MainCard.scss';
import React, { useState, useEffect } from 'react';

const Maincard = () => {

  const [lat, setLat] = useState('41.39')
  const [lon, setLon] = useState('2.15')
  const [cityName, setCityName] = useState('')


  useEffect(() => {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
    .then(res => res.json())
    .then(data => setCityName(data.message))
  },[lat, lon]);


  return(
    <div className="main">

      <h1>City:</h1>
      <p>{cityName}</p>
    </div>
  )
};

export default Maincard;
