import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "userOrders",
  initialState: {
    Orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.Orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
} = OrderSlice.actions;

export default OrderSlice.reducer;