import React from 'react'
// import './GearSelected.css'
import { useSelector } from 'react-redux';

const GearSelected = () => {

  const {positionInit, inputInit} = useSelector((state)=>state.dfaModel);

  let gearSelected;

  function gearSelection() {
    if (positionInit === 'Q0' || inputInit === 'i')
      gearSelected = 'P';
    else if (positionInit === 'Q1')
      gearSelected = 'P';
    else if (positionInit === 'Q2')
      gearSelected = 'P';
    else if (positionInit === 'Q3')
      gearSelected = 'N';
    else if (positionInit === 'Q4')
      gearSelected = 'N';
    else if (positionInit === 'Q5')
      gearSelected = 'D';
    else if (positionInit === 'Q6')
      gearSelected = 'R';
    else if (positionInit === 'Q7')
      gearSelected = 'D';
    else
      gearSelected = '';
    return gearSelected;
  }

  let gear = gearSelection();

  return (
    <div className={gear === 'P' ? 'row w-100 text-danger' : 'row w-100 text-success  gear-start'}>
      <div className="col-12 d-flex justify-content-center">
        <h1>{gearSelection()}</h1>
      </div>
    </div>
  )
}

export default GearSelected