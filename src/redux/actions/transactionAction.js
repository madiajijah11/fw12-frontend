import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const checkout = createAsyncThunk(
  'transactions/checkout',
  async ({ ...transactionData }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`
        }
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/transactions/checkout`,
        { ...transactionData },
        config
      );
      return data.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
