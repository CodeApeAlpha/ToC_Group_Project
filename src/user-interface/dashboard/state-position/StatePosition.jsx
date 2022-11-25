import React from 'react'
import './StatePosition.css'
import { useSelector } from 'react-redux'

const StatePosition = () => {

  const {positionInit, inputInit} = useSelector((state)=>state.dfaModel);

  let positionState;
  let signalProcessed;

  function statePosition() {
    if (positionInit === 'Q0')
      positionState = 'off position';
    else if (positionInit === 'Q1')
      positionState = 'hold position';
    else if (positionInit === 'Q2')
      positionState = 'ignition-on position';
    else if (positionInit === 'Q3')
      positionState = 'engine-started position';
    else if (positionInit === 'Q4')
      positionState = 'stationary position';
    else if (positionInit === 'Q5')
      positionState = 'in-forward-motion position';
    else if (positionInit === 'Q6')
      positionState = 'in-reverse-motion position';
    else if (positionInit === 'Q7')
      positionState = 'cruise-control position';
    else
      positionState = '';
    return positionState;
  }

  function processedSignal() {
    if (inputInit === 'a')
      signalProcessed = 'engine-started/engine-off';
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
    <div >
      <p className='state-position'>
        state: {statePosition()}
      </p>
      <p className='character-accepted'>
        symbol processed: {inputInit}
      </p>
      <p className='signal'>
        signal: {processedSignal()}
      </p>
    </div>
  )
}

export default StatePosition