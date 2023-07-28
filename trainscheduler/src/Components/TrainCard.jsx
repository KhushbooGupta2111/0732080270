// src/components/TrainCard.js
import React from 'react';

const TrainCard = ({ train }) => {
  const { name, departureTime, sleeperPrice, acPrice, sleeperSeats, acSeats, delayMinutes } = train;

  return (
    <div className="train-card">
      <h2>{name}</h2>
      <p>Departure Time: {departureTime}</p>
      <p>Delay: {delayMinutes} minutes</p>
      <div className="coach-info">
        <p>Sleeper:</p>
        <p>Price: {sleeperPrice}</p>
        <p>Seats Available: {sleeperSeats}</p>
      </div>
      <div className="coach-info">
        <p>AC:</p>
        <p>Price: {acPrice}</p>
        <p>Seats Available: {acSeats}</p>
      </div>
    </div>
  );
};

export default TrainCard;
