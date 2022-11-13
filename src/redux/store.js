import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from './counter'
import dfaModelReducer from './dfaModel'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      dfa: dfaModelReducer
  },
})