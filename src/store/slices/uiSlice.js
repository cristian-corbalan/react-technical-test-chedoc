import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  section: 'home'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeSection (state, action) {
      state.section = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
