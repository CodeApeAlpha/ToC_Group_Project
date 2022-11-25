import React from 'react'
import './Dashboard.css'
import GearSelected from './gear-selected/GearSelected'
import RunStringHeader from './run-string/RunStringHeader'
import Speedometer from './speedometer/Speedometer'
import StatePosition from './state-position/StatePosition'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='dashboard-header'>
          <RunStringHeader/>
        </div>
        <div className='dashboard-state-position'>
          <StatePosition/>
        </div>
        <div className='dashboard-speedometer'>
          <Speedometer/>
        </div>
        <div className='dashboard-gear-selected'>
          <GearSelected/>
        </div>
    </div>
  )
}

export default Dashboard