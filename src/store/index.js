import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice.js';
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer
  }
});

export default store;
