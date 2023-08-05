import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    addToWatchlist: (state, action) => {
      state.push(action.payload);
    },
    // Add more reducers here if needed
  },
});

export const { addToWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
