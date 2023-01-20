import { createSlice } from '@reduxjs/toolkit';

import { login, register } from '../actions/authAction';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
  loading: false,
  token,
  error: null,
  success: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: (build) => {
    build.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });
    build.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
