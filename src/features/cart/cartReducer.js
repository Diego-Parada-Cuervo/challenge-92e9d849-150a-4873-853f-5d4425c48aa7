import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    updateQuantity(state, action) {
      const product = state.find((item) => item.id === action.payload.productId);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;