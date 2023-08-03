import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  runTimestamp: 0,
  html: "",
  css: "",
  js: "",
};

const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    updateRunTimestamp: (state, action) => {
      state.runTimestamp = new Date().getTime();
    },
    updateHTML: (state, action) => {
      // console.log(action);
      state.html = action.payload;
    },
    updateCSS: (state, action) => {
      // console.log(action);
      state.css = action.payload;
    },
    updateJS: (state, action) => {
      // console.log(action);
      state.js = action.payload;
    },
  },
});

export const { updateHTML, updateCSS, updateJS, updateRunTimestamp } =
  codeSlice.actions;
export default codeSlice.reducer;
