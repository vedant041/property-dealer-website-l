import { createSlice } from "@reduxjs/toolkit";

const shareSlice = createSlice({
  name: "shares",
  initialState: {
    count: 8,
    pricePerShare: 1342,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count > 1) state.count--;
    },
  },
});

export const { increment, decrement } = shareSlice.actions;
export default shareSlice.reducer;
