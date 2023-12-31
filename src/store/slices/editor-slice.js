import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  runTimestamp: 0,
  html: "",
  css: "",
  js: "",
};

const editorSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    updateRunTimestamp: (state, action) => {
      state.runTimestamp = new Date().getTime();
    },
    updateHTML: (state, action) => {
      state.html = action.payload;
    },
    updateCSS: (state, action) => {
      state.css = action.payload;
    },
    updateJS: (state, action) => {
      state.js = action.payload;
    },
  },
});

export const { updateHTML, updateCSS, updateJS, updateRunTimestamp } =
  editorSlice.actions;
export default editorSlice.reducer;
