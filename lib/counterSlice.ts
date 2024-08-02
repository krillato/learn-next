// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false, search: "" };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loadingPost: (state) => {
      state.value = !state.value;
    },
    searchPost: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { loadingPost, searchPost } = counterSlice.actions;

export default counterSlice.reducer;
