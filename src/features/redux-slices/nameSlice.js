import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: null,
  reducers: {
    userName: (state, action) => action.payload,
  },
});

export const { userName } = nameSlice.actions;
export default nameSlice.reducer;
