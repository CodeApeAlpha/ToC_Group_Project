import React, { useState } from 'react'
// import Button from '../../components/Button'
import {VscDebugRestart} from 'react-icons/vsc'


const RunStringHeader = (props) => {
    const [speedometer, setSpeed ] = useState(props.speedometer);

    const runStringButton = event => {
        event.preventDefault()
        setSpeed(speedometer);
        console.log('click')
    }

    return (
        <div className="run-string">
            <form className='run-string-form'>
                <div className='form-control'>
                    {/* <label>Enter a string to run:</label> */}
                    {/* <Button color='green' text='run' onClick={runStringButton} type='submit'/> */}
                    <input type='text' placeholder='Enter a string to run'/>
                    <button className='btn' onClick={runStringButton}>run</button>
                    <button className='restart-btn'>
                        <VscDebugRestart/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RunStringHeader