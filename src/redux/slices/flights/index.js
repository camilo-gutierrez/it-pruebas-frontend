import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  flight: 0,
}

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    getFlight: (item, action) => {
      console.log(action.payload);
      item.flight = action.payload
    },
  },
})


export const { getFlight } = flightsSlice.actions

export default flightsSlice.reducer