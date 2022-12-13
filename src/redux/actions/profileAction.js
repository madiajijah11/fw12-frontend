import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async ({ token }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`,
        config
      );
      return data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
