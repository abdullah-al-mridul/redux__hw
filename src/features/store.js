import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./redux-slices/nameSlice";

const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});

export { store };
