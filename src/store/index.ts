import { configureStore } from '@reduxjs/toolkit';
import movementsReducer from './slices/movementsSlice';
import categoriesReducer from './slices/categoriesSlice';
import uiReducer from './slices/uiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    movements: movementsReducer,
    categories: categoriesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;