import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decremented: (state) => {
      state.count -= 1;
    },
  },
});
console.log(counterSlice);

export const { incremented, decremented } = counterSlice.actions;
export const selectCounter = (state) => state.counter;

export default counterSlice.reducer;
