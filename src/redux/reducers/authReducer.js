import { createSlice } from "@reduxjs/toolkit";

import { login } from "../actions/authAction";

const initialState = {
  token: null,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
    },
  },
  extraReducers: (build) => {
    build.addCase(login.rejected, (state, action) => {
      console.log(action);
      state.message = action.error.message;
    });
    build.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
      state.message = "";
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
