/**
 * 
 * confugurationstore : A standard method of creating a Redux store, which wraps around the legacy function createStore.
 * Documentation: https://redux-toolkit.js.org/api/configureStore
 * It contains object as argument where you specify the reducer and other configurations
 * It contains reducer key it used to define the slice of state managed by the store.
 * 
 */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
