// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "" };

const searchRedux = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchPost: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchPost } = searchRedux.actions;

export default searchRedux.reducer;
