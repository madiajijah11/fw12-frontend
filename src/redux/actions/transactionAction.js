import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const checkout = createAsyncThunk(
  "transactions/checkout",
  async ({ transactionData }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/transactions/checkout`,
        {
          ...transactionData,
        }
      );
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      console.log(err.response.data.message);
      return err.response.data.message;
    }
  }
);
