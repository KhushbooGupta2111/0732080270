// src/components/TrainList.js
import React from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
