// src/pages/AllTrainsPage.js
import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../Services/trainService';
import TrainList from '../Components/TrainList';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    getAllTrains()
      .then((response) => {
        // Assuming the API response contains an array of trains
        setTrains(response.data.trains);
      })
      .catch((error) => {
        console.error('Error fetching trains:', error);
      });
  }, []);

  return (
    <div className="all-trains-page">
      <h1>All Trains Schedule</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
