// https://www.youtube.com/watch?v=iBUJVy8phqw&t=639s
import { configureStore } from '@reduxjs/toolkit'
import dfaModelReducer from './dfaModel'

export const store = configureStore({
  reducer: {
      dfaModel: dfaModelReducer
  },
})