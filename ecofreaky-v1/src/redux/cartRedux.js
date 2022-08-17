import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const sum = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.products.findIndex((product) => product._id === action.payload._id);
      if(productIndex >= 0){
        state.products[productIndex].quantity += 1;
        toast.success('Product quantity updated');
        const total = sum(state.products.map((product) => product.pprice * product.quantity));
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
      }
      else{
        state.products.push(action.payload);
        toast.success('Product added to cart');
        const total = sum(state.products.map((product) => product.pprice * product.quantity));
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
      }
    },
    removeProduct: (state, action) => {
      const cart = state.products.filter((product) => product._id !== action.payload._id); 
      state.products = cart;
      toast.error('Product removed from cart');
      const total = state.products.map((product) => product.pprice * product.quantity);
      state.total = sum(total);
      state.total = total;
      const quantity = sum(state.products.map((product) => product.quantity));
      state.quantity = quantity;
    },
    decreaseProduct: (state, action) => {
      const decreaseIndex = state.products.findIndex((product) => product._id === action.payload._id);
      if(state.products[decreaseIndex].quantity > 1){
        state.products[decreaseIndex].quantity -= 1;
        toast.error('Product quantity decreased');
        const total = sum(state.products.map((product) => product.pprice * product.quantity));
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
      }
      else if(state.products[decreaseIndex].quantity === 1){
        const cart = state.products.filter((product) => product._id !== action.payload._id); 
        state.products = cart;
        toast.error('Product removed from cart');
        const total = sum(state.products.map((product) => product.pprice * product.quantity));
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
      }

    },
    emptyCart: (state) => {
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    }
  },
});

export const { addProduct, removeProduct, decreaseProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;