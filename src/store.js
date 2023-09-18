import { configureStore } from "@reduxjs/toolkit";
import { historicReducer } from "./features/historic/historic-slice";

export const store = configureStore({
  reducer: {
    counter: historicReducer
  }
})
