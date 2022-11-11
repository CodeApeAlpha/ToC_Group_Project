import React from 'react'
import GearSelected from './gear-selected/GearSelected'
import RunStringHeader from './RunStringHeader'
import Speedometer from './speedometer/Speedometer'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className='dashboard-header'>
            <RunStringHeader/>
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