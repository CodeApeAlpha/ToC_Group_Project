import React, {Component, useState, useEffect} from "react";
import CarSimulation from './user-interface/simulation-car/CarSimulation.jsx';
import Dashboard from './user-interface/dashboard/Dashboard.jsx';



function App() {

  return (
    <div  className="container border">
        <div className="row">
          <div className="col-3 border-end">
            <Dashboard />
          </div>
          <div className="col-9 overflow-hidden">
            <CarSimulation />  
          </div>
        </div>
    </div>
  );
}

export default App;
