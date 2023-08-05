import { configureStore } from '@reduxjs/toolkit';
import watchlistReducer from './features/watchlistSlice'; // Import your watchlistSlice
import cartReducer from './features/cartSlice';

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    cart: cartReducer,
    // Add more reducers here if needed
  },
});

export default store;
