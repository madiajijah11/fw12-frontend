import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  movieId: '',
  cinemaId: '',
  bookingDate: '',
  bookingTime: '',
  seatNum: '',
  fullName: '',
  email: '',
  phoneNumber: '',
  paymentMethodId: ''
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    chooseMovie: (state, action) => {
      const { movieId, cinemaId, bookingTime, bookingDate } = action.payload;
      state = {
        ...state,
        ...{ movieId, cinemaId, bookingTime, bookingDate }
      };
      return state;
    },
    chooseSeat: (state, action) => {
      const { seatNum } = action.payload;
      state = {
        ...state,
        ...{ seatNum }
      };
      return state;
    },
    choosePayment: (state, action) => {
      const { paymentMethodId, fullName, email, phoneNumber } = action.payload;
      state = {
        ...state,
        ...{ paymentMethodId, fullName, email, phoneNumber }
      };
      return state;
    }
  },
  extraReducers: (build) => {}
});

export const { chooseMovie, chooseSeat, choosePayment } = transactionSlice.actions;

export default transactionSlice.reducer;
