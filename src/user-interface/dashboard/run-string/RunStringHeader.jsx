import React, { useState } from 'react';
import './RunStringHeader.css';
import {VscDebugRestart} from 'react-icons/vsc';
import { useDispatch} from 'react-redux';
import {start} from "../../../dfa-operation/dfaModel"


const RunStringHeader = (props) => {

    // const {inputInit} = useSelector((state)=>state.dfaModel)
    const [state, setState ] = useState(" ");
    const dispatch = useDispatch();
    const regex = new RegExp("^([a-i])+");


   function handleChange(event) {
        console.log(event.target.value);
        let value = event.target.value.trim();
        let test = regex.test(value);
        console.log(value!==" ");
        // console.log("testing: "+value)
        // if(value.length < 0){
        //     alert("Empty input not accpeted")
        //     return
        // }
        if(test && value!==" "){
            setState(value[0].trim());
            return;
        }
        alert("The character " + value + " rejected");
        setState("");
    }

    const runStringButton = event => {
        event.preventDefault();
        if(state === " "){
            alert("Empty input not accpeted");
            return;
        }
        console.log("State value ",state);
        dispatch(start(state));
        setState("");
        // speedReduction()
    }

    function refreshPage() {
        window.location.reload(false);
      }
  
    return (
            <div className="run-string" onSubmit={runStringButton}>
                <form className='run-string-form'>
                    <div className='form-control'>
                        <input type='text' value={state}  placeholder='Enter a character to run' onChange={handleChange}/>
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