import React from 'react'
import './StatePosition.css'
import { useSelector } from 'react-redux'

const StatePosition = () => {

  const { positionInit, inputInit } = useSelector((state) => state.dfaModel);

  let positionState;
  let signalProcessed;

  function statePosition() {
    if (positionInit === 'Q0')
      positionState = 'off ';
    else if (positionInit === 'Q1')
      positionState = 'hold ';
    else if (positionInit === 'Q2')
      positionState = 'ignition-on ';
    else if (positionInit === 'Q3')
      positionState = 'engine-started ';
    else if (positionInit === 'Q4')
      positionState = 'stationary ';
    else if (positionInit === 'Q5')
      positionState = 'in-forward-motion ';
    else if (positionInit === 'Q6')
      positionState = 'in-reverse-motion ';
    else if (positionInit === 'Q7')
      positionState = 'cruise-control ';
    else
      positionState = '';
    return positionState;
  }

  function processedSignal() {
    if (inputInit === 'a')
      signalProcessed = 'engine-started';
    else if (inputInit === 'b')
      signalProcessed = 'brake-held';
    else if (inputInit === 'c')
      signalProcessed = 'seat-belt-engaged';
    else if (inputInit === 'd')
      signalProcessed = 'drive-selected';
    else if (inputInit === 'e')
      signalProcessed = 'reverse-selected';
    else if (inputInit === 'f')
      signalProcessed = 'accelerate';
    else if (inputInit === 'g')
      signalProcessed = 'break-pressed';
    else if (inputInit === 'h')
      signalProcessed = 'set-cruise-control';
    else if (inputInit === 'i')
      signalProcessed = 'park-selected';
    return signalProcessed;
  }

  return (
   <div className="row w-100">
    <div className="col-12">
    <ul class="list-group ">
      <li class="list-group-item"><b>State: </b>{statePosition()}</li>
      <li class="list-group-item"><b>Symbol Processed: </b>{inputInit}</li>
      <li class="list-group-item"><b>Signal: </b>{processedSignal()}</li>
    </ul>
    </div>
   </div>
   
   
  )
}

export default StatePosition