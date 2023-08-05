import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  leftActiveTab: "html",
  rightActiveTab: "console",
  panelState: { left: true, right: true },
  importProjectTimestamp: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLeftActiveTab: (state, action) => {
      state.leftActiveTab = action.payload;
    },
    setRightActiveTab: (state, action) => {
      state.rightActiveTab = action.payload;
    },
    setPanelState: (state, action) => {
      state.panelState = action.payload;
    },
    setImportProjectTimestamp: (state, action) => {
      state.importProjectTimestamp = new Date().getTime();
    },
  },
});

export const {
  setLeftActiveTab,
  setRightActiveTab,
  setPanelState,
  setImportProjectTimestamp,
} = uiSlice.actions;
export default uiSlice.reducer;
