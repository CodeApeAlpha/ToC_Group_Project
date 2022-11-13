import React, {Component, useState, useEffect} from "react";
import AppStyles from "./App.module.css";

import CarSimulation from './user-interface/simulation-car/CarSimulation.jsx';



function App() {

  // function adjustSpeed() {
  //   setSpeed(prevSpeed => prevSpeed + 5);
  //   console.log(speed);
  // }

  // useEffect (() => {
  //   console.log("App.js");
  // }, []);


  return (
    <div id = {AppStyles.mainDiv}  className="app-container">
      {/* <CarSimulation carOnProp = {carOn} speedProp = {speed} drivePositionProp = {drivePosition}/>  */}
        <CarSimulation />
      
    </div>
  );
}

export default App;
