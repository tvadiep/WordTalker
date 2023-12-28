import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import notesSlice from "./notes/notesSlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
  notes: notesSlice,
});

export default rootReducer;
