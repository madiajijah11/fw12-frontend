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
  reducers: {
    clearProfile: (state, action) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: build => {
    build.addCase(getProfile.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
      state.error = null;
    });
    build.addCase(getProfile.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  }
});

export const { clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
