// src/pages/SingleTrainPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainById } from '../Services/trainService';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    getTrainById(trainId)
      .then((response) => {
        // Assuming the API response contains the detailed information of a single train
        setTrain(response.data.train);
      })
      .catch((error) => {
        console.error('Error fetching train:', error);
      });
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  const { name, departureTime, sleeperPrice, acPrice, sleeperSeats, acSeats, delayMinutes } = train;

  return (
    <div className="single-train-page">
      <h1>{name}</h1>
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

export default SingleTrainPage;
