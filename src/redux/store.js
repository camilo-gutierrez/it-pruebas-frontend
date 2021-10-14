import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import  flights  from './slices/flights'

const rootReducer = combineReducers({
    flights,
})

export const store = configureStore({
  reducer: rootReducer
})
