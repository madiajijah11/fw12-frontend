import { createSlice } from "@reduxjs/toolkit";

import { checkout } from "../actions/transactionAction";

const initialState = {
  bookingDate: "",
  movieId: "",
  cinemaId: "",
  movieScheduleId: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  statusId: "",
  paymentMethodId: "",
  userId: "",
  seatNum: "",
  transactionId: "",
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    chooseMovie: (state, action) => {
      const { movieId, cinemaId, movieScheduleId, bookingDate } =
        action.payload;
      state = {
        ...state,
        ...{ movieId, cinemaId, movieScheduleId, bookingDate },
      };
      return state;
    },
    chooseSeat: (state, action) => {
      state.seatNum = action.payload;
      return state;
    },
    choosePayment: (state, action) => {
      const { paymentMethodId, fullName, email, phoneNumber } = action.payload;
      state = {
        ...state,
        ...{ paymentMethodId, fullName, email, phoneNumber },
      };
      return state;
    },
  },
  extraReducers: (build) => {
    build.addCase(checkout.pending, (state, action) => {
      state = {
        ...state,
        ...{ statusId: 1 },
      };
      return state;
    });
  },
});

export const { chooseMovie, chooseSeat, choosePayment } =
  transactionSlice.actions;

export default transactionSlice.reducer;
