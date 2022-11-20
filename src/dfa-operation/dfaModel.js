// https://www.youtube.com/watch?v=iBUJVy8phqw&t=639s
import { createSlice } from '@reduxjs/toolkit'
import {  dfaFunction } from "../dfa-model/dfa"
const initialState = {
    positionInit: "Q0",
    speedInit: 0,
    inputInit: '',
    postionStack:[]
}
export const dfaModelSlice = createSlice({
  name: 'dfa',
  initialState,
  reducers: {
    start:(state,action)=>{
      let data = dfaFunction(action.payload,state.positionInit,state.speedInit)
      console.log(data)
      state.positionInit = data.position
      state.speedInit = data.speed
      state.inputInit = action.payload
      state.postionStack.push({
        "position":state.positionInit,
        "input":action.payload
      })
    
    },
    decrease:(state)=>{
      if(state.speedInit>0 ){
        state.speedInit-=5;
        state.postionStack.push({
          "position":state.positionInit,
          "input":"speed-decrease"
        })
        if((state.speedInit)==0){
          state.positionInit = "Q4"
          state.postionStack.push({
            "position":"Q4",
            "input":"speed-decrease"
          })
        }
      }
    },
    setPositionStationary:(state)=>{
      state.positionInit = "Q4"
    }
  },
})

// Action creators are generated for each case reducer function
export const { start , decrease, setPositionStationary} = dfaModelSlice.actions

export default dfaModelSlice.reducer