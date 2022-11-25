import React, {Component, useState, useEffect} from "react";
import AppStyles from "./App.module.css";

import CarSimulation from './user-interface/simulation-car/CarSimulation.jsx';
import Dashboard from './user-interface/dashboard/Dashboard.jsx';



function App() {

  return (
    <div id = {AppStyles.mainDiv}  className="app-container">
        <Dashboard />
        <CarSimulation />  
    </div>
  );
}

export default App;
