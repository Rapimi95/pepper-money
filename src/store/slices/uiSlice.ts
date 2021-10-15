import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  bottomNavbarValue: number,
};

const initialState: UIState = {
  bottomNavbarValue: 1,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setBottomNavbarValue: (state, action: PayloadAction<number>) => {
      state.bottomNavbarValue = action.payload;
    },
  },
});

export const {
  setBottomNavbarValue,
} = uiSlice.actions;

export default uiSlice.reducer;