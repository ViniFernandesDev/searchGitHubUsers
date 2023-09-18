import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const historicSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    incrementAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const {increment, incrementAmount} = historicSlice.actions

export const historicReducer = historicSlice.reducer
