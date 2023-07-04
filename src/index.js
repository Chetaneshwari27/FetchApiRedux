import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./store/UserSlice";

export const store = configureStore({
  reducer: {
    useDetails: UserSlice,
  },
});