import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./slices/editor-slice";
import uiReducer from "./slices/ui-slice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    ui: uiReducer,
  },
});
