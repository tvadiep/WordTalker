// DUCKS patterns

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      state.value++;
    },

    // reset
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
