import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, cb }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );
      console.log(res.data.data.token);
      cb();
      return res.data.data.token;
    } catch (err) {
      console.log(err.response.data.message);
      throw err.response.data.message;
    }
  }
);