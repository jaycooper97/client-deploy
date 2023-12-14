// src/Routes.js
import React from 'react';
// import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'; // App
import Home from './components/Home';
import About from './components/About';
import Parking from './components/Parking';
import Forecast from './components/Forecast';

const Routes = () => {
  return (
    // App
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/categories/parking" component={Parking} />
        <Route path="/categories/forecast" component={Forecast} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
