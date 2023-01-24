import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
  token
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  },
  extraReducers: build => {}
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
