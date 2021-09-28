import { configureStore } from '@reduxjs/toolkit';
import movementsReducer from './slices/movementsSlice';

export const store = configureStore({
  reducer: {
    movements: movementsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;