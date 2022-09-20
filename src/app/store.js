import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import progress from "../features/progress/progressSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    progress,
  },
});
