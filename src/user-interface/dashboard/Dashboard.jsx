import React from 'react'
// import './Dashboard.css'
import GearSelected from './gear-selected/GearSelected'
import RunStringHeader from './run-string/RunStringHeader'
import Speedometer from './speedometer/Speedometer'
import StatePosition from './state-position/StatePosition'

const Dashboard = () => {
  return (
      <div className="border-top row mt-5 bg-light">
        <div className="mt-4 col-12 d-flex justify-content-evenly ">
          <RunStringHeader/>
        </div>
        <div className="col-12 d-flex justify-content-evenly mt-4">
          <StatePosition/>
        </div>
        <div className="col-12 d-flex justify-content-evenly ">
            <Speedometer/>
         </div>
         <div className="col-12 d-flex justify-content-center ">
            <GearSelected/>
         </div>
      </div>
  
  )
}

export default Dashboard