import React, {Component, useEffect, useState} from "react";

import CarSimulationStyles from "./CarSimulation.module.css";

import backgroundImg from "./images/background.jpg";
import foregroundImg from "./images/foreground.png";
import carImg from "./images/car.png";

import { connect, useDispatch, useSelector } from 'react-redux';
import {increment, incrementByAmount} from "../../redux/counter"
import {start} from "../../redux/dfaModel"


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



    const {count} = useSelector((state)=>state.counter)
    const {positionQueue} = useSelector((state)=>state.counter)

    const dispatch = useDispatch();
    // dispatch(increment())
    // dispatch(decrement())

    const [speed, setSpeed] = useState (0);
    const [carOn, setCarOn] = useState ("");
    const [drivePosition, setDrivePosition] = useState ("");
    
    const backgroundElement = React.useRef(null);
    const foregroundElement = React.useRef(null);
    const carElement = React.useRef(null);
    
    // getPositionQueue()


    useEffect (() => {
        console.log("Init value: ",count)
        console.log("UseEffect speed: ",speed);
        updateAnimations();

    }, [carOn, speed, drivePosition]);

    





    //-------------------------------------------------------HELPER FUNCTIONS------------------------------


    //Parameters -> Is car on?("1 or 0"), drive position("f,r,c"), speed(int)
    function updateData(on, speed, position) {
        setCarOn(on);
        setDrivePosition(position);
        setSpeed(speed);
    }


    function updateAnimations() {

        //----Car bodyroll Animation Controller
        if (carOn === "1") {
            carElement.current.style.animationPlayState = "running";
        }
        else {
        carElement.current.style.animationPlayState = "paused";
        }


        //----Car speed and dirrection Animation Controller
        if (drivePosition === "f" || drivePosition === "c") {
            foregroundElement.current.style.animationName = CarSimulationStyles.move;
            foregroundElement.current.style.animationIterationCount = "infinite";
            foregroundElement.current.style.animationTimingFunction = "linear";
            foregroundElement.current.style.animationDuration = getSpeed();
            foregroundElement.current.style.animationPlayState = isCarMoving();
        }
        else if(drivePosition === "r") {
            foregroundElement.current.style.animationName = CarSimulationStyles.move;
            foregroundElement.current.style.animationIterationCount = "infinite";
            foregroundElement.current.style.animationTimingFunction = "linear";
            foregroundElement.current.style.animationDirection = "reverse";
            foregroundElement.current.style.animationDuration = getSpeed();
            foregroundElement.current.style.animationPlayState = isCarMoving();
        }
    }
    

    function isCarMoving() { //range 50 - 1 ms

        if (speed === 0){
            return "paused";
        }
        else {
            return "running";
        }
    }


    function getSpeed() {
        let s1 = 0;

        if (speed > 0 && speed < 97){
            s1 = Math.round(15 - (speed/6.7));
        }
        else if (speed > 97){
            s1 = 1;
        }
        else if(speed <= 0){
            s1 = 0;
        }
        return s1+"s";
    }

    const test= () =>{
        // dispatch(increment())
        dispatch(start("bac"))
        // console.log("Array ",positionQueue)
        // updateData("1",count,"f")
    }
    
    return (
       
            // <div id = {CarSimulationStyles.simulationContainer} style = {{transform: `scale(${scale})`}} onClick ={(e) => { test() }}>
            // <div id = {CarSimulationStyles.background} ref = {backgroundElement} style = {backgroundStyle}>
            //     <div id = {CarSimulationStyles.foreground} ref = {foregroundElement} style = {foregroundStyle}></div>
            //     <div id = {CarSimulationStyles.car} ref = {carElement} style = {carStyle}></div> 
            // </div>

            // </div>
            <div id = {CarSimulationStyles.simulationContainer}  onClick ={(e) => {updateData("1",50,"f") }}>
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

