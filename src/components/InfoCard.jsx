import React from 'react';
import './InfoCard.scss';

  const InfoCard = () => {
    const weatherCategory = ['few clouds'];

    return (
      <div className="info-description">
        <h3> {weatherCategory} </h3>
        <h3>Premier component</h3>
        <p>Humidity component info</p>
      </div>
      );
  }

export default InfoCard;
