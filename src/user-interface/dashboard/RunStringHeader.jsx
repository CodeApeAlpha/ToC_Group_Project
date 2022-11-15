import React, { useState } from 'react'
// import Button from '../../components/Button'
import {VscDebugRestart} from 'react-icons/vsc'
// Redux Toolkit
import { connect, useDispatch, useSelector } from 'react-redux';
import {start,decrease} from "../../redux/dfaModel"


const RunStringHeader = (props) => {
    const [state, setState ] = useState(" ");
    const dispatch = useDispatch();
    const {position,speed} = useSelector((state)=>state.dfaModel)
    const regex = new RegExp("^([a-j])+");

    // const {count} = useSelector((state)=>state.counter)



    function speedReduction(){
        let ID = setInterval(()=>{
            dispatch(decrease())
        },3000)
        
    }
   function handleChange(event) {
        console.log(event.target.value)
        let value = event.target.value.trim()
        let test = regex.test(value)
        console.log(value!=" ")
        if(test && value!=" "){
            setState(value[0].trim());
            return
        }
        alert("Rejected")
        setState("");
    }
    const runStringButton = event => {
        event.preventDefault()
        if(state === " "){
            alert("Empty Input  Not Accpeted")
            return
        }
        console.log("State value ",state)
        dispatch(start(state))
        setState("")
        // speedReduction()
    }
    function refreshPage() {
        window.location.reload(false);
      }
  
    return (
            <div className="run-string" onSubmit={runStringButton}>
                <form className='run-string-form'>
                    <div className='form-control'>
                       
                        {/* <label>Enter a string to run:</label> */}
                        {/* <Button color='green' text='run' onClick={runStringButton} type='submit'/> */}
                        <input type='text' value={state}  placeholder='Enter a string to run' onChange={handleChange}/>
                        <button className='btn' type='submit'>run</button>
                        <button className='restart-btn'onClick={refreshPage} >
                            <VscDebugRestart/>
                        </button>
                    </div>
                </form>
                
            </div>
    )
}

export default RunStringHeader