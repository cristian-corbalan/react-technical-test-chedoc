import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  section: 'home',
  details: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeSection (state, action) {
      state.section = action.payload;
    },
    showDetails (state, action) {
      state.details = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
