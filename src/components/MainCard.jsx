import './MainCard.scss';
import React, { useState, useEffect } from 'react';

const Maincard = () => {

  const [lat, setLat] = useState('41.39')
  const [lon, setLon] = useState('2.15')
  const [cityName, setCityName] = useState('Barcelona')
  const API_key = '9c7f34b95b5c80f28c782184dd6ca42b'

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
