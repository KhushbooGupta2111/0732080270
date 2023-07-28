// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTrainsPage from './Pages/AllTrainPage';
import SingleTrainPage from './Pages/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={AllTrainsPage} />
        <Route exact path="/trains/:trainId" component={SingleTrainPage} />
      </Routes>
    </Router>
  );
};

export default App;
