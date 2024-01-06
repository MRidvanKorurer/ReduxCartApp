import { createSlice } from "@reduxjs/toolkit";
import courseData from "../courseData";

const initialState = {
  carts: courseData,
  total: 0,
  quantity: 4,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteCart: (state) => {
      state.carts = [];
    },
    deleteCartItem: (state, actions) => {
      const deletedITem = state.carts.filter((item) => item.id !== actions.payload);
      state.carts = deletedITem;
    },
    increase: (state, actions) => {
      const cartItem = state.carts.find((item) => item.id === actions.payload);
      cartItem.quantity += 1;
    },
    decrease: (state, actions) => {
      const cartItem = state.carts.find((item) => item.id === actions.payload);
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;

      state.carts.forEach((item) => {
        total += item.price * item.quantity;
        quantity += item.quantity;
      });
      state.total = total;
      state.quantity = quantity;
    },
  },
});

export const { deleteCart, deleteCartItem, decrease, increase, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
