/**
 * 
 * CREATESLICE :: A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
 * https://redux-toolkit.js.org/api/createslice/
 * 
 * PAYLOADACTION :: In Redux, actions are plain JavaScript objects that describe changes in an application's state. 
 * These actions are dispatched from components and are the only source of information for the Redux store. 
 * The Redux store then passes these actions to reducers, which specify how the state should change in response to the actions.
 *  https://www.geeksforgeeks.org/reactjs/actions-payload-in-react-redux/#features-of-actions-payload
 * 
 */


import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  name: string;
  role: "admin" | "member";
} | null;

interface UserState {
  user: User;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
