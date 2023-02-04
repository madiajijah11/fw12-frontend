import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null
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
