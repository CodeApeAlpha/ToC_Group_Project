import React, { useState } from 'react';
// import './RunStringHeader.css';
import {VscDebugRestart} from 'react-icons/vsc';
import { useDispatch} from 'react-redux';
import {start} from "../../../dfa-operation/dfaModel"


const RunStringHeader = (props) => {

    // const {inputInit} = useSelector((state)=>state.dfaModel)
    const [state, setState ] = useState(" ");
    const dispatch = useDispatch();
    const regex = new RegExp("^([a-i])+");


   function handleChange(event) {
        console.log("Testing the value: "+event.target.value.length);
        let value = event.target.value.trim();
        let test = regex.test(value);
        // console.log(value!==" ");
        if(test && value!==" "){
            setState(value[0].trim());
            return;
        }
        alert("The character " + value + " rejected");
        setState("");
    }

    const runStringButton = event => {
        event.preventDefault();
        if(state === " " || state === ""){
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
            <form className='row w-100 input-group input-group-sm ' onSubmit={runStringButton}>
                    <div className="col-6 d-flex align-items-center">
                        <input className='form-control w-100' type='text' value={state}  placeholder='Enter char' onChange={handleChange}/>
                    </div>
                    <div className="col-3 d-flex align-items-center ">
                        <button className='btn btn-sm btn-success w-100' type='submit'>run</button>
                    </div>
                    <div className="col-3 d-flex align-items-center  ">
                    <button className='btn btn-sm btn-danger w-100'onClick={refreshPage} >
                        <VscDebugRestart/>
                    </button>
                    </div>
            </form>
    )
}

export default RunStringHeader