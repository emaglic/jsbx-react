import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  runTimestamp: 0,
  html: "",
  css: "",
  js: "",
  htmlPage: "",
  jsSuperset: "javascript",
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
    updateHTMLPage: (state, action) => {
      state.htmlPage = action.payload;
    },
    updateJSSuperset: (state, action) => {
      state.jsSuperset = action.payload;
    },
  },
});

export const {
  updateHTML,
  updateCSS,
  updateJS,
  updateRunTimestamp,
  updateHTMLPage,
  updateJSSuperset,
} = editorSlice.actions;
export default editorSlice.reducer;
