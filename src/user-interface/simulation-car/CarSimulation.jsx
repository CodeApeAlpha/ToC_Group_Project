import React, {Component, useEffect, useState} from "react";

import CarSimulationStyles from "./CarSimulation.module.css";

import backgroundImg from "./images/background.jpg";
import foregroundImg from "./images/foreground.png";
import carImg from "./images/car.png";

import { connect, useDispatch, useSelector } from 'react-redux';
// import {increment, incrementByAmount} from "../../redux/counter"
import {start,decrease} from "../../dfa-operation/dfaModel"


//----------------------------------------------------------VARS---------------------------
let vh = window.innerHeight;
let scale = (vh/408);


const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    color: 'green',
}
const foregroundStyle = {
    backgroundImage: `url(${foregroundImg})`,
}
const carStyle = {
    backgroundImage: `url(${carImg})`,
}






export default function CarSimulation () {

    // Redux
    const {positionInit,speedInit} = useSelector((state)=>state.dfaModel)
    const dispatch = useDispatch();
    const [pause,setPause] = useState(false)

    // Native Code 
    const backgroundElement = React.useRef(null);
    const foregroundElement = React.useRef(null);
    const carElement = React.useRef(null);
    

    function updateAnimations() {
        //----Car bodyroll Animation Controller
        if (positionInit === "Q0"||positionInit === "Q1" || positionInit === "Q2" ) {
            carElement.current.style.animationPlayState = "paused";
            return 
        }
        if ( positionInit === "Q3" || positionInit === "Q4" || positionInit === "Q5" || positionInit === "Q6" || positionInit === "Q7") {
            carElement.current.style.animationPlayState = "running";
        }
        
        //----Car speed and dirrection Animation Controller
        if (positionInit === "Q5" || positionInit === "Q7" || positionInit === "Q4" ) {
            foregroundElement.current.style.animationName = CarSimulationStyles.move;
            foregroundElement.current.style.animationIterationCount = "infinite";
            foregroundElement.current.style.animationTimingFunction = "linear";
            foregroundElement.current.style.animationDuration = getSpeed();
            foregroundElement.current.style.animationPlayState = isCarMoving();
        }
        else if(positionInit === "Q6" ) {
            foregroundElement.current.style.animationName = CarSimulationStyles.move;
            foregroundElement.current.style.animationIterationCount = "infinite";
            foregroundElement.current.style.animationTimingFunction = "linear";
            foregroundElement.current.style.animationDirection = "reverse";
            foregroundElement.current.style.animationDuration = getSpeed();
            foregroundElement.current.style.animationPlayState = isCarMoving();
        }
        console.log("Inside Function speed: ",speedInit);
        console.log("Inside Function position: ",positionInit);
    }
    
    function setIntervalX(callback, delay, speed) {
        var intervalID = window.setInterval(function () {
            callback();
            if (speed == 1) {
                window.clearInterval(intervalID);
                console.log("End OF Interval")
                setPause(false) 

            }
        }, delay);

    }

    function speedReduction(){
        console.log("Test")
        // if( (positionInit == "Q5" || positionInit == "Q6") && !pause ){
        //     console.log("Called Inside Log 1")
        //     setPause(true)  
        //     setInterval(()=>{
        //         dispatch(decrease())
        //         console.log("Called Inside Log deceasing")
        //     },5000)
        // }
        // while(speedInit!=0){
        // }
        // if( (positionInit == "Q5" || positionInit == "Q6") && !pause ){
        //     setPause(true)
        //     setIntervalX(()=>{
        //         dispatch(decrease())
        //     },5000,1)
        // }
        if( (positionInit == "Q5" || positionInit == "Q6") && !pause && speedInit!=0){
            console.log("True")
            setPause(true)
            setIntervalX(()=>{
                dispatch(decrease())
            },5000,1)
        }

        // setPause(false)

        // var intervalID = window.setInterval(()=>{
        //         // Your logic here
        //         dispatch(decrease())
        //         console.log("Speed: ",speedInit)
        //         console.log("Interval ID: ",intervalID)
        //         if (speedInit == 0) {
        //             window.clearInterval(intervalID);
        //             setPause(false)
        //         }
        // },3000,);       
    }
    speedReduction()

    useEffect (() => {
        updateAnimations();
    }, [speedInit, positionInit]);


    //-------------------------------------------------------HELPER FUNCTIONS------------------------------


    //Parameters -> Is car on?("1 or 0"), drive position("f,r,c"), speed(int)
    // function updateData(on, speedInput, positionInput) {
    //     setCarOn(on);
    //     setDrivePosition(positionInput);
    //     setSpeed(speedInput);
    // }

    function isCarMoving() { //range 50 - 1 ms
        if (speedInit === 0){
            return "paused";
        }
        else {
            return "running";
        }
    }


    function getSpeed() {
        let s1 = 0;

        if (speedInit > 0 && speedInit < 97){
            s1 = Math.round(15 - (speedInit/6.7));
        }
        else if (speedInit > 97){
            s1 = 1;
        }
        else if(speedInit <= 0){
            s1 = 0;
        }
        return s1+"s";
    }


    return (
       
            // <div id = {CarSimulationStyles.simulationContainer} style = {{transform: `scale(${scale})`}} onClick ={(e) => { test() }}>
            // <div id = {CarSimulationStyles.background} ref = {backgroundElement} style = {backgroundStyle}>
            //     <div id = {CarSimulationStyles.foreground} ref = {foregroundElement} style = {foregroundStyle}></div>
            //     <div id = {CarSimulationStyles.car} ref = {carElement} style = {carStyle}></div> 
            // </div>

            // </div>
            <div id = {CarSimulationStyles.simulationContainer}  >
                <div id = {CarSimulationStyles.background} ref = {backgroundElement} style = {backgroundStyle}>
                    <div id = {CarSimulationStyles.foreground} ref = {foregroundElement} style = {foregroundStyle}></div>
                    <div id = {CarSimulationStyles.car} ref = {carElement} style = {carStyle}></div> 
                </div>
            </div>
    
        
    );

};
// const mapStateToProps = (state, ownProps) => {
//     return {
//       contacts: state.contacts
//     }
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       createContact: contact => dispatch(contactAction.createContact(contact))
//     }
//   };

