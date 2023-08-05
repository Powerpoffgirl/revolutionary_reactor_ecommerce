import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id: productId, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
