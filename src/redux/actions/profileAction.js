import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const { data } = await http(token).get(`${process.env.REACT_APP_API_URL}/api/v1/profile`);
      return data.results;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
