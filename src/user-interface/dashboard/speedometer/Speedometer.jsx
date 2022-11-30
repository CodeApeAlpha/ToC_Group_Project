import React from 'react';
import './Speedometer.css';
import { useSelector } from 'react-redux';

const Speedometer = () => {

    const {speedInit} = useSelector((state)=>state.dfaModel);
        
    let digit1;
    let digit2;
    let digit3;

    let speed = speedInit;
    
    function readSpeed() {
        let speedArray = [];
        while (speed > 0) {
            speedArray.push(speed % 10);
            speed = Math.trunc(speed / 10);
        }
        return speedArray;
    }
    
    let speedChange = [];
    speedChange = readSpeed();
    digit1 = speedChange[2];
    digit2 = speedChange[1];
    digit3 = speedChange[0];
    
    const inputDigit = (
        <div className="digital-speedometer">
            <svg width="0" height="0" viewBox="0 0 0 0">
                <defs>
                    <g id="unit-h">
                        <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z"></path>
                    </g>
                    <g id="unit-v">
                        <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z"></path>
                    </g>
                </defs>
            </svg>
            <div className="digit">
                <svg id="digit-1" className="num-0" width="60" height="140" viewBox="0 0 260 480">
                    <use xlinkHref="#unit-h" className={
                        digit1 === 0 || digit1 === 2 || digit1 === 3 || 
                        digit1 === 5 || digit1 === 7 || 
                        digit1 === 8 || digit1 === 9 ? "segment a" : "segment "} x="30" y="0"></use>
                    <use xlinkHref="#unit-v" className={
                        digit1 === 0 || digit1 === 1 || digit1 === 2 || digit1 === 3 || 
                        digit1 === 4 || digit1 === 7 || digit1 === 8 || digit1 === 9 ? "segment b" : "segment "} x="220" y="30"></use>
                    <use xlinkHref="#unit-v" className={
                        digit1 === 0 || digit1 === 1 || digit1 === 3 || digit1 === 4 ||
                        digit1 === 5 || digit1 === 6 || digit1 === 7 || 
                        digit1 === 8 || digit1 === 9 ? "segment c" : "segment"}x="220" y="250"></use>
                    <use xlinkHref="#unit-h" className={
                        digit1 === 0 || digit1 === 2 || digit1 === 3 || 
                        digit1 === 5 || digit1 === 6 || digit1 === 8 ? "segment d" : "segment "} x="30" y="440"></use>
                    <use xlinkHref="#unit-v" className={
                        digit1 === 0 || digit1 === 2 || 
                        digit1 === 6 || digit1 === 8 ? "segment e" : "segment "} x="0" y="250"></use>
                    <use xlinkHref="#unit-v" className={
                        digit1 === 0 || digit1 === 4 || digit1 === 5 || digit1 === 6 || 
                        digit1 === 8 || digit1 === 9 ? "segment f" : "segment "}x="0" y="30"></use>
                    <use xlinkHref="#unit-h" className={
                        digit1 === 2 || digit1 === 3 || digit1 === 4 ||
                        digit1 === 5 || digit1 === 6 ||
                        digit1 === 8 || digit1 === 9 ? "segment g" : "segment "} x="30" y="220"></use>
                </svg>
                <svg id="digit-2" className="num-0" width="60" height="140" viewBox="0 0 260 480">
                    <use xlinkHref="#unit-h" className={
                        digit2 === 0 || digit2 === 2 || digit2 === 3 || 
                        digit2 === 5 || digit2 === 7 || 
                        digit2 === 8 || digit2 === 9 ? "segment a" : "segment "} x="30" y="0"></use>
                    <use xlinkHref="#unit-v" className={
                        digit2 === 0 || digit2 === 1 || digit2 === 2 || digit2 === 3 || 
                        digit2 === 4 || digit2 === 7 || digit2 === 8 || digit2 === 9 ? "segment b" : "segment "} x="220" y="30"></use>
                    <use xlinkHref="#unit-v" className={
                        digit2 === 0 || digit2 === 1 || digit2 === 3 || digit2 === 4 ||
                        digit2 === 5 || digit2 === 6 || digit2 === 7 || 
                        digit2 === 8 || digit2 === 9 ? "segment c" : "segment"}x="220" y="250"></use>
                    <use xlinkHref="#unit-h" className={
                        digit2 === 0 || digit2 === 2 || digit2 === 3 || 
                        digit2 === 5 || digit2 === 6 || digit2 === 8 ? "segment d" : "segment "} x="30" y="440"></use>
                    <use xlinkHref="#unit-v" className={
                        digit2 === 0 || digit2 === 2 || 
                        digit2 === 6 || digit2 === 8  ? "segment e" : "segment "} x="0" y="250"></use>
                    <use xlinkHref="#unit-v" className={
                        digit2 === 0 || digit2 === 4 || digit2 === 5 || digit2 === 6 || 
                        digit2 === 8 || digit2 === 9 ? "segment f" : "segment "}x="0" y="30"></use>
                    <use xlinkHref="#unit-h" className={
                        digit2 === 2 || digit2 === 3 || digit2 === 4 ||
                        digit2 === 5 || digit2 === 6 ||
                        digit2 === 8 || digit2 === 9 ? "segment g" : "segment "} x="30" y="220"></use>
                </svg>
                <svg id="digit-3" className="num-0" width="60" height="140" viewBox="0 0 260 480">
                    <use xlinkHref="#unit-h" className={
                        digit3 === 0 || digit3 === 2 || digit3 === 3 || 
                        digit3 === 5 || digit3 === 7 || 
                        digit3 === 8 || digit3 === 9 ? "segment a" : "segment "} x="30" y="0"></use>
                    <use xlinkHref="#unit-v" className={
                        digit3 === 0 || digit3 === 1 || digit3 === 2 || digit3 === 3 || 
                        digit3 === 4 || digit3 === 7 || digit3 === 8 || digit3 === 9 ? "segment b" : "segment "} x="220" y="30"></use>
                    <use xlinkHref="#unit-v" className={
                        digit3 === 0 || digit3 === 1 || digit3 === 3 || digit3 === 4 ||
                        digit3 === 5 || digit3 === 6 || digit3 === 7 || 
                        digit3 === 8 || digit3 === 9 ? "segment c" : "segment"}x="220" y="250"></use>
                    <use xlinkHref="#unit-h" className={
                        digit3 === 0 || digit3 === 2 || digit3 === 3 || 
                        digit3 === 5 || digit3 === 6 || digit3 === 8 ? "segment d" : "segment "} x="30" y="440"></use>
                    <use xlinkHref="#unit-v" className={
                        digit3 === 0 || digit3 === 2 || 
                        digit3 === 6 || digit3 === 8  ? "segment e" : "segment "} x="0" y="250"></use>
                    <use xlinkHref="#unit-v" className={
                        digit3 === 0 || digit3 === 4 || digit3 === 5 || digit3 === 6 || 
                        digit3 === 8 || digit3 === 9 ? "segment f" : "segment "}x="0" y="30"></use>
                    <use xlinkHref="#unit-h" className={
                        digit3 === 2 || digit3 === 3 || digit3 === 4 ||
                        digit3 === 5 || digit3 === 6 ||
                        digit3 === 8 || digit3 === 9 ? "segment g" : "segment "} x="30" y="220"></use>
                </svg>
                <div>
                    <p className='text-danger'>kmH</p>
                </div>
            </div>
        </div>
    )

    return (
        inputDigit
    )
    
}

export default Speedometer