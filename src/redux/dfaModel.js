// https://www.youtube.com/watch?v=iBUJVy8phqw&t=639s
import { createSlice } from '@reduxjs/toolkit'
import {  dfaFunction,reset,getPositionQueue } from "../components/state-header"
const initialState = {
    positionQueue:new Array() ,
    position: "Q0",
    speed: 0
}

export const dfaModelSlice = createSlice({
  name: 'dfa',
  initialState,
  reducers: {
    start:(state,action)=>{
        console.log("Start Postion Queue ",state.positionQueue)
        state.positionQueue = new Array()
        state.positionQueue = dfaFunction(action.payload)
        console.log("End Postition Queue ",state.positionQueue)
    },
    dfaFunction(state,action){
        console.log("Called From Inside")
        // testCase = regex.test(input);
        // found = input.match(/^([a-j])+/g);
        // queue = found[0].split("");
        // if(testCase && position == "Q0" ){
        //     q0Function(next(queue),queue)
        //     return state.positionQueue
        // }else if(testCase && position == "Q1"){
        //     q1Function(next(queue),queue)
        //     return state.positionQueue
        // }else if(testCase && position == "Q2"){
        //     q2Function(next(queue),queue)
        //     return state.positionQueue
        // }else if(testCase && position == "Q2"){
        //     q3Function(next(queue),queue)
        //     return state.positionQueue
            
        // }else if(testCase && position == "Q3"){
        //     q3Function(next(queue),queue)
        //     return state.positionQueue
        // }else if(testCase && position == "Q4"){
        //     q4Function(next(queue),queue)
        //     return state.positionQueue
        // }else if(testCase && position == "Q5"){
        //     q5Function(next(queue),queue)
        //     return state.positionQueue
        // }else if(testCase && position == "Q6"){
        //     q6Function(next(queue),queue)
        //     return state.positionQueue
        // }else if(testCase && position == "Q7"){
        //     q7Function(next(queue),queue)
        //     return state.positionQueue
        // }else{
        //    return false;
        // }
    },
    // q0Function(input,queue){
    //     position = "Q0";
    //     // setPosition("Q0")
    //     console.log("Input: "+input+" Position: "+position)
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
       
    //     if(input == "a"){
    //         q2Function(next(queue),queue)
    //     }
    //     else if(input == "b"){
    //         q1Function(next(queue),queue)
    //     }else{
    //         q0Function(next(queue),queue)
    //     }
    //     positionQueue.push({
    //         input:null,
    //         speed:speed,
    //         position:position
    //     })
    // },
    // q1Function(input,queue){
    //     position= "Q1"
    //     console.log("Input: "+input+" Position: "+position)
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
    //     if(input == "a"){
    //          q3Function(next(queue),queue)
    //     }else{
    //         q1Function(next(queue),queue)
    //     }
    
    // },
    // q2Function(input,queue){
    //     position = "Q2"
    //     // setPosition("Q2")
    //     console.log("Input: "+input+" Position: "+position)
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
    //     if(input == "a"){
    //         q0Function(next(queue),queue)
    //     }else if(input == "b"){
    //         q1Function(next(queue),queue)
    //     }else{
    //         q2Function(next(queue),queue)
    //     }
        
    
    // },
    // q3Function(input,queue){
    //     position = "Q3"
    //     // setPosition("Q3")
    //     console.log("Input: "+input+" Position: "+position)
        
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
    //     if(input == "a"){
    //         q0Function(next(queue),queue)
    //     }else if(input == "c"){
    //         q4Function(next(queue),queue)
    //     }else{
    //         q3Function(next(queue),queue)
    //     }
        
    
    // },
    // q4Function(input,queue){
    //     position = "Q4"
    //     // setPosition("Q4")
    //     console.log("Input: "+input+" Position: "+position)
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
    //     if(input == "i"){
    //         increaseSpeed()
    //         q3Function(next(queue),queue)
    //     }else if(input == "e"){
    //         increaseSpeed()
    //         q6Function(next(queue),queue)
    //     }else if(input == "d"){
    //         increaseSpeed()
    //         q5Function(next(queue),queue)
    //     }else{
    //         q4Function(next(queue),queue)
    //     }
        
    
    // },
    // q5Function(input,queue){
    //     position = "Q5"
    //     // setPosition("Q5")
    //     console.log("Input: "+input+" Position: "+position)
       
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
    //     if(input == "b"){
    //         speed= 0
    //         q4Function(next(queue),queue)
    //     }else if(input == "h"){
    //         q7Function(next(queue),queue)
    //     }else if(input == "f"){
    //             // increase speed
    //             increaseSpeed()
    //     }else if(input == "g"){
    //         // decrease speed
    //         // console.log("Speed",speed)
    //         if((speed-1)!=0){
    //             decreaseSpeed()
    //         }else{
    //             decreaseSpeed()
    //             q4Function(next(queue),queue)
    //         }
    //     }
       
    //     if(speed!=0 && queue.length!=0 ){        
    //         q5Function(next(queue),queue)
    //     }
       
    
    // },
    // q6Function(input,queue){
    //     position = "Q6"
    //     // setPosition("Q6")
    //     console.log("Input: "+input+" Position: "+position)
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
    //     if(input == "b"){
    //         speed= 0
    //         q4Function(next(queue),queue)
    //     }else if(input == "f"){
    //         // increase speed
    //         increaseSpeed()
    //     }else if(input == "g"){
    //         // decrease speed
    //         if((speed-1)!=0){
    //             decreaseSpeed()
    //         }else{
    //             decreaseSpeed()
    //             q4Function(next(queue),queue)
    //         }
    //     }
    //     if(speed != 0 && queue.length!=0){
    //         q6Function(next(queue),queue)
    //     }
    // },
    // q7Function(input,queue){
    //     position = "Q7"
    //     // setPosition("Q7")
    //     console.log("Input: "+input+" Position: "+position)
    //     if(!test(input,queue)){
    //         return ;
    //     }
    //     positionQueue.push({
    //         input:input,
    //         speed:speed,
    //         position:position
    //     })
    //     if(input == "g"){
    //         q5Function(next(queue),queue)
    //     }else{
    //         q7Function(next(queue),queue)
    //     }
        
    
    // },
    // next(queue){
    //     if(queue.length != 0){
    //         return queue.shift();
    //     }
    // },
    // increaseSpeed (){
    //    return speed++;
    // },
    // decreaseSpeed(){
    //     return speed--;
    // },
    // test(input ,queue){
    //     if(queue.length == 0 && input == undefined){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // },
    // reset(){
    //     speed = 0;
    //     position = "Q0"
    //     positionQueue = []
    // },
    
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,start } = dfaModelSlice.actions

export default dfaModelSlice.reducer