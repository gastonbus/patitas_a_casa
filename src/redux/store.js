import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";

export const store = configureStore({
  reducer: {homeSlice},
})