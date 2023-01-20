import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../actions/profileAction';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.userInfo = action.payload.data;
      state.loading = false;
      state.error = null;
    });
    build.addCase(getProfile.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  }
});

export default profileSlice.reducer;
