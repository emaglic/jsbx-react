import { configureStore } from "@reduxjs/toolkit";
import codeReducer from "./slices/code-slice";

export const store = configureStore({
  reducer: {
    code: codeReducer,
  },
});
